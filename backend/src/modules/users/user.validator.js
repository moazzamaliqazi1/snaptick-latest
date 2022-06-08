const { body, param, query } = expressValidator;
const { isStrongPassword, isEmail, isMobilePhone } = validator;
const usersCrudService = new services.CrudService(models.Users);
const signUpPayloadValidation = [
  body("username")
    .notEmpty()
    .withMessage(messages.invalidQuery("username"))
    .custom((value) => validator.matches(value, dataConstraint.USERNAME))
    .withMessage(messages.invalidFormat("username"))
    .custom((value) => {
      return usersCrudService.getDocumentByUserName({ user_name: value }).then((user) => {
        if (user) {
          return Promise.reject(messages.userExists('username'));
        }
      });
    }),
  body("email")
    .custom((value) => {
      return usersCrudService.getDocumentByEmail({ email: value.toLowerCase() }).then((user) => {
        if (user) {
          return Promise.reject(messages.emailExists);
        }
      });
    })
    .notEmpty()
    .withMessage(messages.invalidQuery("email"))
    .custom((value) => isEmail(value, { domain_specific_validation: true }))
    .withMessage(messages.invalidFormat('email')),
  body("password")
    .notEmpty()
    .withMessage(messages.invalidQuery("password"))
    .isString()
    .custom((value) => isStrongPassword(value))
    .withMessage(messages.weakPassword),
];

const loginPayloadValidation = [
  body("email")
    .notEmpty()
    .withMessage(messages.invalidQuery("email"))
    .custom((value) => isEmail(value, { domain_specific_validation: true }))
    .withMessage(messages.invalidFormat('email')),
  body("password")
    .notEmpty()
    .withMessage(messages.invalidQuery("password"))
    .isString()
    .custom((value) => isStrongPassword(value))
    .withMessage(messages.weakPassword),
]
const numberPayloadValidation = [
  body("phone_number")
    .notEmpty()
    .withMessage(messages.invalidQuery("phone_number"))
    .isString()
    .custom((value) => isMobilePhone(value))
    .withMessage(messages.invalidPhoneNumber),
]
const emailPayloadValidation = [
  body("email")
    .notEmpty()
    .withMessage(messages.invalidQuery("email"))
    .custom((value) => isEmail(value, { domain_specific_validation: true }))
    .withMessage(messages.invalidFormat('email')),
]
const forgetPasswordPayloadValidation = [
  body("password")
    .notEmpty()
    .withMessage(messages.invalidQuery("password"))
    .isString()
    .custom((value) => isStrongPassword(value))
    .withMessage(messages.weakPassword),
  body("code")
    .notEmpty()
    .withMessage(messages.invalidQuery("code"))
]
const changePasswordPayloadValidation = [
  body("password")
    .notEmpty()
    .withMessage(messages.invalidQuery("password"))
    .isString()
    .custom((value) => isStrongPassword(value))
    .withMessage(messages.weakPassword),
  body("old_password")
    .notEmpty()
    .withMessage(messages.invalidQuery("old_password"))
]
const verifyCodePayloadValidation = [
  body("code")
    .notEmpty()
    .withMessage(messages.invalidQuery("code"))
]
module.exports = {
  signUpPayloadValidation,
  numberPayloadValidation,
  loginPayloadValidation,
  emailPayloadValidation,
  forgetPasswordPayloadValidation,
  changePasswordPayloadValidation,
  verifyCodePayloadValidation
};
