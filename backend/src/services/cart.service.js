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
}


exports.CartService = CartService;
