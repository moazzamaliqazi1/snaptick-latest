module.exports = {
  generalError: "Something went wrong.",
  invalidLogin: "Invalid email or password",
  InvalidToken: "Invalid token.",
  created: (name) => {
    return `${name} has been created successfully!`;
  },
  signedIn: "You have been signed in successfully",
  updatedModel: (model) => {
    return `${model} has updated successfully!`;
  },
  invalidPayload: "Invalid payload",
  userNotFound: "Couldn't find your Account",
  success: "Success!",
  notFound: (model) => {
    return `${model} does not exist!`;
  },
  verified: "Email verified successfully",
  notVerified: "Email address not verified",
  invalidCode: "Invalid code entered, please try again.",
  alreadyVerified: "Your Email is already verified",
  resendCode: "verification code has been sent to you again",
  SocialSignInMessage: (provider) => {
    return `You have been signed In successfully using ${provider}`;
  },
  SocialSignUpMessage: (provider) => {
    return `You have been registered successfully using ${provider}`;
  },
  badRequest: "Bad request",
  notPresent: "Not present in the payload",
  invalidFormat: (service) => {
    return `Invalid ${service} Format`;
  },
  invalidLength: "Invalid Length!",
  notEmpty: "This field must not be empty!",
  invalidDataType: (val) => {
    return `Please provide valid ${val}!`;
  },
  emailExists: "Email already exists!",
  sessionExpiry: "Session has been expired!",
  updateAttr: (attr) => {
    return `${attr} has been updated successfully!`;
  },
  codeExpired: "Your code has expired.",
  invalidEmail: "invalid email",
  invalidEmailOrPassword: "invalid email or password",
  invalidId: "Invalid Id!",
  invalidQuery: (param) => {
    return `Query param ${param} cannot be empty`;
  },
  weakPassword: 'Invalid password, please use atleast one uppercase ( A-Z), one digit ( 0-9) and one character.',
  userExists: (param) => {
    return `Another user with this ${param} already exists.`
  },
  alreadyInvited: 'You have already been invited',
  invalidPhoneNumber: 'The number you entered is not in valid format',
  invalidUserType: 'You selected a invalid role',
  successfullyRegistered: (user_name)=>{
    return `Dear ${user_name}, You have successfully registered. Kindly verify your email`
  },
  emailNotVerify: 'Sorry, your email is not verified. Kindly first verify your email',
  wrongCredentials: 'Sorry, Login email and password are incorrect',
  loginSuccess: 'You successfully login',
  resendCodeSend: 'System send code on your provided email',
  noOneRegisteredWithEmail: 'Sorry, we cannot find any account with your provided email',
  passwordChanged: 'Your password is successfully is changed. Please Login',
  wrongPassword: 'Your old password is not correct',
  emailVerified: 'Your email is successfully verified',
  forgotPasswordEmailSend: 'We send a email, kindly follow a procedure for change your password',
  notFoundUser: 'We cannot find any user',
  errorOnUploadingProfileImage: 'Error on uploading your profile image',
  profileImageSuccessfullyUploaded: 'Your profile image is successfully uploaded',
  wrongType: 'Please send a valid type',
  alreadyExistPhoneNumber: 'Another user is already with given phone number',
  profileBasicPartSaved: 'You basic profile info is successfully changed',
  socialLinkUpdated: 'Social links is successfully updated',
  settingSaved: 'Setting is successfully save',
  documentUploaded: 'Your document is successfully uploaded',
  doctorPublicProfileIncomplete: 'Your profile cannot published. Please make sure you have completed your profile, upload certificates and set available timings.',
  profilePublishedSuccess: 'Congratulations! Your profile is successfully published',
  fromTimeGreaterThanToTime: 'From time cannot be greater than to time',
  successfullyAddNewAvailableTiming: 'You have successfully added new available timing',
  successfullyUpdatedAvailableTiming: 'You have successfully updated available timing',
  mustAvailableOneHour: 'You must have at least one hour available',
  successfullyDeleteAvailableTiming: 'You have successfully deleted available timing',
  logoutSuccess: 'You have successfully logout',
  doctorSlotsNotAvailableTodayAndTomorrow: 'Doctor not available today and tomorrow. Please select another doctor',
  paymentCardInfoNotValid: 'Your card information is not valid',
  successfullyAddNewPaymentCard: 'Your card is successfully added',
  successfullyAddPatientAppointment: (doctor_name, time, date)=>{
    return `You have successfully booked an appointment with ${doctor_name} at ${time} on ${date}`
  },
  successfullyAddPatientAppointmentTitle: 'New Appointment',
  successfullyNewAppointment: (patient_name, time, date)=>{
    return `You have new appointment with ${patient_name} at ${time} on ${date}`
  },
  contactMessageSend: 'Your message is successfully sent',
  cartItemAdded: 'Your item is successfully added into cart',
  paymentError: 'Some error during charge a payment',
  updatedProfile: 'Profile has been successfully updated'
};
