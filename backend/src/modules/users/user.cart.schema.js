const cartsSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        frame_id: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ['pending', 'processing', 'failed', 'cancelled', 'completed'],
            default: 'pending',
        },
        payment_status: {
            type: Boolean,
            default: false,
        },
        payment_type: {
            type: String,
            enum: ['cash', 'online', null],
            default: null
        },
        cost: {
            type: String,
            trim: true,
        },
        phone_number: {
            type: String,
            default: null,
        },
        address: {
            type: String,
            default: null,
        },
        card_number: {
            type: String,
            default: null,
        },
        quantity: {
            type: Number,
            default: 1,
        },
        image: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("Carts", cartsSchema);
