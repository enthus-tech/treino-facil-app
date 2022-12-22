import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-w3KutFfrwiGWhq6xup7lVy0D",
  apiKey: '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',
});
export const openAi = new OpenAIApi(configuration);
// const response = await openai.listEngines();