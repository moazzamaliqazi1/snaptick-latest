const usersCrudService = new services.CrudService(models.Users);
const usersService = new services.UsersService(models.Users);

exports.auth = {
  register: async (req, res, next) => {
    try {
      let { username, email, password } = req.body;
      email = email.toLowerCase();
      const bcryptPassword = await bcrypt.hash(password, 10);
      const code = await randomString.generate({
        length: 6,
        charset: "numeric",
      });
      const newUser = await usersCrudService.addUser({
        user_name: username,
        email,
        password: bcryptPassword,
        verification_code: code,
        expire_date: moment(Date.now()).add(5, "m").toDate(),
        email_verify: false,
        user_type: 'user'
      }
      );
      // create stripe id for new user
      const customer = await stripe.customers.create({
        description: `user stripe id created on ${new Date}`,
        metadata: {
          "database_id": newUser._id
        },
        name: newUser.user_name
      })
      await usersService.updateUserCustomerId(newUser._id, customer.id)
      libs.email_service.registerCode(email, username, code, dataConstraint.sendgridTemplates.register).then().catch()
      utils.response.response(res, messages.successfullyRegistered(username), true, 200, newUser);
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { password } = req.body;
      let { user } = req;
      if (await bcrypt.compare(password, user.password)) {
        const token = JWT.sign({ _id: user._id, email: user.email }, process.env.JWTSECRET, {
          expiresIn: process.env.TOKEN_EXPIRY,
        });
        await usersService.updateJWT(user._id._id, token);
        user = await usersService.getUserByIdWithFullDetails(user._id)
        utils.response.response(res, messages.loginSuccess, true, 200, user);
      } else {
        user = await usersService.getUserByIdWithFullDetails(user._id)
        utils.response.response(res, messages.wrongCredentials, false, 200, user);
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  resendCode: async (req, res, next) => {
    try {
      const { user } = req;
      const code = await randomString.generate({
        length: 6,
        charset: "numeric",
      });
      libs.email_service.resendCode(user.email, code, dataConstraint.sendgridTemplates.resendCode).then().catch()
      await usersService.saveCode(user._id, code, moment(Date.now()).add(5, "m").toDate());
      utils.response.response(res, messages.resendCodeSend, true, 200, null);
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  newPassword: async (req, res, next) => {
    try {
      const { code, password, _id } = req.body;
      const user = await usersService.getUserById(_id)
      if (user) {
        if (user.verification_code == code) {
          if (user.expire_date >= Date.now()) {
            const bcryptPassword = await bcrypt.hash(password, 10);
            await usersService.updatePassword(user._id, bcryptPassword);
            utils.response.response(res, messages.passwordChanged, true, 200, null);
          } else {
            utils.response.response(res, messages.codeExpired, false, 200, null);
          }
        }
        else {
          utils.response.response(res, messages.invalidCode, false, 200, null);
        }
      }
      else {
        utils.response.response(res, messages.notFoundUser, false, 200, null);
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  changePassword: async (req, res, next) => {
    try {
      let { user } = req;
      const { password, old_password } = req.body;
      if (await bcrypt.compare(old_password, user.password)) {
        const bcryptPassword = await bcrypt.hash(password, 10);
        await usersService.updatePassword(user._id, bcryptPassword);
        user = await usersService.getUserByIdWithFullDetails(user._id)
        utils.response.response(res, messages.passwordChanged, true, 200, user);
      }
      else {
        utils.response.response(res, messages.wrongPassword, false, 200, null);
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  verifyCode: async (req, res, next) => {
    try {
      let { user } = req;
      const { code } = req.body;
      if (user.verification_code == code) {
        if (user.expire_date >= Date.now()) {
          await usersService.verifyEmail(user._id);
          user = await usersService.getUserByIdWithFullDetails(user._id)
          utils.response.response(res, messages.emailVerified, true, 200, user);
        } else {
          utils.response.response(res, messages.codeExpired, false, 200, null);
        }
      }
      else {
        utils.response.response(res, messages.invalidCode, false, 200, null);
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  sendEmailForgotPassword: async (req, res, next) => {
    try {
      const { user } = req;
      const code = await randomString.generate({
        length: 6,
        charset: "numeric",
      });
      await usersService.saveCode(user._id, code, moment(Date.now()).add(5, "m").toDate());
      libs.email_service.forgotPasswordSendEmail(user.email, `${process.env.FRONTEND_URL}/change-password/${user._id}/${code}`, dataConstraint.sendgridTemplates.forgotPasswordEmail).then().catch()
      utils.response.response(res, messages.forgotPasswordEmailSend, true, 200, null);
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  sendContactMessage: async (req, res, next) => {
    try {
      const { name, email, message } = req.body;
      libs.email_service.contactMessage(email, name, message, dataConstraint.sendgridTemplates.contactMessage).then().catch()
      utils.response.response(res, messages.contactMessageSend, true, 200, null);
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { user } = req;
      await usersService.updateJWT(user._id, null);
      await usersService.updateFirebaseToken(user._id, 'remove', []);
      utils.response.response(res, messages.logoutSuccess, true, 200, null);
    } catch (error) {
      console.log(error)
      next(error);
    }
  }
};

