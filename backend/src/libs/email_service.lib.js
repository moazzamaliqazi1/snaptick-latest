const { SENDINBLUE_APIKEY, SENDINBLUE } = process.env;
const config = {
  headers: { 'api-key': SENDINBLUE_APIKEY }
};
const registerCode = async (email, user_name, code, templateId) => {
  try {
    await axios.post(SENDINBLUE, {
      to: [
        {
          email,
          name: user_name
        }
      ],
      templateId: templateId,
      params: {
        user_name,
        code
      }
    }, config);
  } catch (error) {
    console.log(error);
  }
};
const resendCode = async (email, code, templateId) => {
  try {
    await axios.post(SENDINBLUE, {
      to: [
        {
          email,
          name: "User"
        }
      ],
      templateId: templateId,
      params: {
        code
      }
    }, config);
  } catch (error) {
    console.log(error);
  }
};

const forgotPasswordSendEmail = async (email, url, templateId) => {
  try {
    await axios.post(SENDINBLUE, {
      to: [
        {
          email,
          name: "User"
        }
      ],
      templateId: templateId,
      params: {
        url
      }
    }, config);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  registerCode,
  resendCode,
  forgotPasswordSendEmail,
}