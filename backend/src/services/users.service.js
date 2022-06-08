class UsersService {
    constructor(model) {
        this.model = model;
    }
    async updateUserCustomerId(_id, stripe_customer_id) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    stripe_customer_id
                }
            }, { new: true });
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateJWT(_id, token) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    jwt_token: token
                }
            }, { new: true });
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async saveCode(_id, code, expire_date) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    verification_code: code,
                    expire_date
                }
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updatePassword(_id, password) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                password
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async verifyEmail(_id) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                email_verify: true
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async getUserById(_id) {
        try {
            return await this.model.findOne({ _id })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateProfileImage(_id, filename_url, file_object) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    profile_image: filename_url,
                    profile_image_object: file_object
                }
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async isUserExistByPhoneNumber(_id, number) {
        try {
            return await this.model.findOne({
                $and: [
                    {
                        _id: { $ne: _id }
                    },
                    {
                        phone_number: number
                    }
                ]
            })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateBasicProfile(_id, old_details, name, bio, phone_number, phone_info) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    name: name ? name : old_details.name,
                    bio: bio ? bio : old_details.bio,
                    phone_number: phone_number ? phone_number : old_details.phone_number,
                    phone_info: phone_info ? phone_info : old_details.phone_info,
                }
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async updateProfileSetting(_id, old_details, setting) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $set: {
                    setting: {
                        ...old_details.setting,
                        ...setting
                    }
                }
            }, { new: true })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async getUserByIdWithFullDetails(_id) {
        try {
            const user = await this.model.aggregate([
                {
                    $match: { _id }
                },
            ])
            return user[0]
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
    async addPaymentCard(number, expiry, cvc, name, stripe_card_id, brand, _id) {
        try {
            return await this.model.findOneAndUpdate({ _id }, {
                $push: {
                    payment_cards: {
                        number, expiry, cvc, name, stripe_card_id, brand
                    }
                }
            })
        } catch (error) {
            console.log(error);
            throw createError(500);
        }
    }
}


exports.UsersService = UsersService;
