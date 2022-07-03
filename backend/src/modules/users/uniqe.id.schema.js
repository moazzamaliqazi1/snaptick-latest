const uniqueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("Unique", uniqueSchema);
