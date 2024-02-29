const { Configuration, OpenAIApi } = require("openai");
const sdk = require("api")("@writesonic/v2.2#4enbxztlcbti48j");
const { OPENAI_API_KEY, WRITESONIC_API_KEY } = process.env;

const configuration = new Configuration({
  organization: "org-TqXNrD6cRM8PCtaoME9vrQDQ",
  apiKey: OPENAI_API_KEY,
});
sdk.auth(WRITESONIC_API_KEY);
const openai = new OpenAIApi(configuration);

const chatGPT = async (text, currentModel, maxToken, temPerature) => {
  try {
    const response = await openai.createCompletion({
      model: `${currentModel}`, //text-davinci-003
      prompt: `${text}`,
      temperature: Number(temPerature), // 0.5,
      max_tokens: Number(maxToken),
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(text);
    console.log(response.data);
    return response.data.choices[0].text.replace(/^\n\n/, "");
  } catch (error) {
    throw error;
  }
};

const chatSONIC = async (unhashed, hashed) => {
  try {
    const response = await sdk.chatsonic_V2BusinessContentChatsonic_post(
      {
        enable_google_results: "true",
        enable_memory: false,
        input_text: "create a long story for me, up too 500 words",
      },
      { engine: "premium" }
    );

    return response.message;
  } catch (error) {
    throw error;
  }
};

module.exports = { chatGPT, chatSONIC };
