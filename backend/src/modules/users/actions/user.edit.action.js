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
            const { basic_data, type, social_links, setting, fee } = req.body;
            const { user } = req;
            if (type == 'basic-info') {
                // check number is exist or not
                const isPhoneNumberExist = await usersService.isUserExistByPhoneNumber(user._id, basic_data.phone_number)
                await usersService.updateBasicProfile(user._id, user, basic_data.name, basic_data.bio, isPhoneNumberExist ? user.phone_number : basic_data.phone_number, isPhoneNumberExist ? user.phone_info : basic_data.phone_info)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, isPhoneNumberExist ? messages.alreadyExistPhoneNumber : messages.profileBasicPartSaved, isPhoneNumberExist ? false : true, 200, updateProfile);
            }
            else if (type == 'social-links') {
                await usersService.updateSocialLinks(user._id, user, social_links)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.socialLinkUpdated, true, 200, updateProfile);
            }
            else if (type == 'general-setting') {
                await usersService.updateProfileSetting(user._id, user, setting)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.settingSaved, true, 200, updateProfile);
            }
            else if (type == 'finance-setting') {
                await usersService.updateProfileFinance(user._id, fee)
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.settingSaved, true, 200, updateProfile);
            }
            else {
                const updateProfile = await usersService.getUserByIdWithFullDetails(user._id)
                utils.response.response(res, messages.wrongType, false, 200, updateProfile);
            }
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