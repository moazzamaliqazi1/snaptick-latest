class CartService {
    constructor(model) {
        this.model = model;
    }
    async addItem(user_id, frame_id, image) {
        try {
            const newItem = new this.model({
                user_id,
                frame_id,
                image
            })
            return await newItem.save()
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async getCartItem(user_id, status) {
        try {
            return await this.model.find({ $and: [
                {
                    user_id
                },
                {
                    status
                }
            ] });
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async removeIDs(ids) {
        try {
            return await this.model.deleteMany({ _id: ids })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateOrderStatusProcessing(orders, paymentId, phone_number, address, payment_type, card_number) {
        try {
            for(const order of orders){
                if(Number(order.quantity) != 0){
                    await this.model.updateOne({ _id: order._id }, {
                        $set: {
                            status: "processing",
                            payment_status: paymentId ? true: false,
                            transaction_id: paymentId ? paymentId: order._id.toString(),
                            phone_number, address,
                            payment_type: payment_type,
                            card_number: payment_type == "online" ? card_number: null
                        }
                    })
                }
            }
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
}


exports.CartService = CartService;
