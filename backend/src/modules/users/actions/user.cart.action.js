const cartService = new services.CartService(models.Carts);
exports.cart = {
    addToCart: async (req, res, next) => {
        try {
            profileImageStorage(req, res, async(err) => {
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
    }
}