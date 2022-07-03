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
                            transaction_id: paymentId,
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
    async getOrders(user_id) {
        try {
            return await this.model.aggregate([
                {
                    $match: {
                        $and: [
                            user_id ? {
                                user_id
                            }: {}
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "user_id",
                        foreignField: "_id",
                        as: "user_details"
                    }
                }
            ])
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateOrders(status, _id) {
        try {
            return await this.model.updateMany({_id}, {$set: {status}})
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async getOrderByTransactionId(transaction_id) {
        try {
            return await this.model.find({transaction_id})
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
}


exports.CartService = CartService;
