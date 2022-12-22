import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-w3KutFfrwiGWhq6xup7lVy0D",
  // apiKey:
});
export const openAi = new OpenAIApi(configuration);
// const response = await openai.listEngines();