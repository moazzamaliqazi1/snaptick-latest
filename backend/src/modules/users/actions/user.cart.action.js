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
                        const newArray = req.files.reduce((previousValue, currentValue)=>{
                            return [
                                ...previousValue,
                                currentValue.filename
                            ]
                        }, [])
                        const cart = await cartService.addItem(req.user._id, req.body.frame_id ? req.body.frame_id: null, JSON.stringify(newArray), req.body.frame_id ? "frame": "book");
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
            const { status, order_type } = req.query;
            const cart = await cartService.getCartItem(req.user._id, status, order_type);
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
            console.log('data');
            // remove all items that have quantity zero
            // make quantity to Number First
            const zeroQuantityIds = [];
            for (const zero of data.orders) {
                if (Number(zero.quantity) == 0) {
                    zeroQuantityIds.push(mongoose.Types.ObjectId(zero._id))
                }
            }
            if(data.orders.length==zeroQuantityIds.length){
                utils.response.response(res, 'Please select some items to place order', false, 200, null);
            }
            else{
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
                    let ids = new models.Unique({
                        name: 'test'
                    })
                    ids = await ids.save()
                    await cartService.updateOrderStatusProcessing(data.orders, charge && charge.id ? charge.id: ids._id.toString(), data.phone_number, data.address, data.payment_type, data.card_number)
                    utils.response.response(res, messages.success, true, 200, {
                        tracking_id: charge && charge.id ? charge.id: ids._id.toString()
                    });
                }
            }
           
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    getOrders: async (req, res, next) => {
        try {
            let { user_id } = req.query
            user_id = user_id ? mongoose.Types.ObjectId(user_id): null
            const getOrders = await cartService.getOrders(user_id)
            const dataArr = []
            for(const order of getOrders){
                dataArr.push({
                    ...order,
                    user_name: order.user_details[0].user_name,
                    phone_number: order.user_details[0].phone_number,
                    user_details: order.user_details[0]
                })
            }
            utils.response.response(res, messages.success, true, 200, dataArr);
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    getOrdersByTransactionId: async (req, res, next) => {
        try {
            const { transaction_id } = req.query
            const data = await cartService.getOrderByTransactionId(transaction_id)
            utils.response.response(res, messages.success, true, 200, data);
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    updateOrder: async (req, res, next) => {
        try {
            const { status, _id } = req.body;
            await cartService.updateOrders(status, _id)
            utils.response.response(res, messages.success, true, 200, null);
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}

