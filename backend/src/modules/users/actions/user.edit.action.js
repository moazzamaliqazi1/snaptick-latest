const usersService = new services.UsersService(models.Users);

exports.edit = {
    changeProfileImage: async (req, res, next) => {
        try {
            const { user } = req;
            const { image_url, file_object } = req.body;
            await usersService.updateProfileImage(user._id, image_url, file_object)
            const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
            utils.response.response(res, messages.profileImageSuccessfullyUploaded, true, 200, updateProfile);
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    changeProfile: async (req, res, next) => {
        try {
            const { phone_number, address } = req.body;
            await usersService.updateBasicProfile(req.user._id, phone_number, address)
            utils.response.response(res, messages.updatedProfile, true, 200, null);
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    changeProfilePublished: async (req, res, next) => {
        try {
            const { user } = req;
            const { status } = req.body;
            if (status) {
                if (!user.name || !user.bio || !user.number || user.languages.length === 0 || user.certificates.length === 0 || user.available_timings.length === 0) {
                    utils.response.response(res, messages.doctorPublicProfileIncomplete, false, 200, null);
                }
                else {
                    await usersService.getUserByIdWithFullDetails(user._id)
                    const updateProfile = await usersService.changePublished(user._id, status)
                    utils.response.response(res, messages.profilePublishedSuccess, true, 200, updateProfile);
                }
            }
            else {
                await usersService.changePublished(user._id, false)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.success, true, 200, updateProfile);
            }
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
    addPaymentCard: async (req, res, next) => {
        try {
            const { user } = req;
            const { cvc, expiry, name, number } = req.body;
            if (cardValidator.number(number).isValid && cardValidator.expirationDate(expiry).isValid && cardValidator.cvv(cvc).isValid && name) {
                const paymentMethod = await stripe.paymentMethods.create({
                    type: dataConstraint.cardType.card,
                    card: {
                        number,
                        exp_month: cardValidator.expirationDate(expiry).month,
                        exp_year: cardValidator.expirationDate(expiry).year,
                        cvc,
                    },
                });
                await stripe.paymentMethods.attach(
                    paymentMethod.id,
                    { customer: user.stripe_customer_id }
                );
                await usersService.addPaymentCard(number, expiry, cvc, name, paymentMethod.id, paymentMethod.card.brand, user._id)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.successfullyAddNewPaymentCard, true, 200, updateProfile);
            }
            else {
                utils.response.response(res, messages.paymentCardInfoNotValid, false, 200, null);
            }
        } catch (error) {
            console.log(error)
            next(error);
        }
    },
}