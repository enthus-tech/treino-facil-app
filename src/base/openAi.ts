import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  // organization: "org-w3KutFfrwiGWhq6xup7lVy0D",
  apiKey: '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',
});
export const openAi = new OpenAIApi(configuration);
// const response = await openai.listEngines();