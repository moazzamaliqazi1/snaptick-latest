const cartService = new services.CartService(models.Carts);
exports.cart = {
    addToCart: async (req, res, next) => {
        try {
            profileImageStorage(req, res, async (err) => {
                try {
                    if (err instanceof multer.MulterError || err) {
                        console.log(err)
                        next(err);
                    }
                    else {
                        const cart = await cartService.addItem(req.user._id, req.body.frame_id, req.file.filename);
                        utils.response.response(res, messages.cartItemAdded, true, 200, cart);
                    }
                } catch (error) {
                    console.log(error)
                    next(error);
                }
            })
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    getCartItem: async (req, res, next) => {
        try {
            const { status } = req.query;
            const cart = await cartService.getCartItem(req.user._id, status);
            utils.response.response(res, messages.success, true, 200, cart);
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    placeOrder: async (req, res, next) => {
        try {
            const { data } = req.body;
            const { user } = req;
            // remove all items that have quantity zero
            // make quantity to Number First
            const zeroQuantityIds = [];
            for (const zero of data.orders) {
                if (Number(zero.quantity) == 0) {
                    zeroQuantityIds.push(mongoose.Types.ObjectId(zero._id))
                }
            }
            await cartService.removeIDs(zeroQuantityIds)
            // get total cost
            const totalCost = data.orders.reduce((previousValue, currentValue)=>{
                if(Number(currentValue.quantity) != 0){
                    if(isNaN(currentValue.cost)){
                        return previousValue
                    }
                    else {
                        return Number(currentValue.cost) + previousValue
                    }
                }
                else {
                    return previousValue
                }
            }, 0)
            console.log(totalCost * 100)
            let isValid = true;
            let charge = null
            if (data.payment_type == 'online') {
                // get card information
                const cardDetails = user.payment_cards.filter((item) => {
                    return item._id.toString() == data.card_number.toString()
                })[0]
                // cut payment from stripe
                // get charge from stripe
                console.log({
                    amount: totalCost * 100,
                    currency: 'pkr',
                    confirm: true,
                    customer: user.stripe_customer_id,
                    payment_method: cardDetails.stripe_card_id,
                    receipt_email: user.email,
                    off_session: true,
                    description: 'payment charge from customer',
                })
                charge = await stripe.paymentIntents.create({
                    amount: totalCost * 100,
                    currency: 'pkr',
                    confirm: true,
                    customer: user.stripe_customer_id,
                    payment_method: cardDetails.stripe_card_id,
                    receipt_email: user.email,
                    off_session: true,
                    description: 'payment charge from customer',
                });
                if(charge.status != 'succeeded'){
                    isValid = false;
                    utils.response.response(res, messages.paymentError, false, 200, null);
                }
            }
            if(isValid){
                // update card items status to pendingSet
                await cartService.updateOrderStatusProcessing(data.orders, charge && charge.id ? charge.id: null, data.phone_number, data.address, data.payment_type, data.card_number)
                utils.response.response(res, messages.success, true, 200, data);
            }
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}

