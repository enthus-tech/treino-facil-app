import { action, makeObservable, observable } from 'mobx';
import { openAi } from '../../base/openAi';
import { Store } from '../../base/store';


export class HomeStore extends Store {
  workout = '';

  constructor() {
    super()
    makeObservable(this, {
      workout: observable,
      sendPrompt: action,
    });
  }
  sendPrompt = async (data: any) => {
    const { space, treino, tempo } = data
    const response = await openAi.createCompletion({
      model: "code-davinci-002",
      prompt: `treino de ${treino} para ser feito em ${tempo} minutos em ${space}?`,
      temperature: 0,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      // stop: ["You:"],
    });
    console.log(response.data.choices);

  }
}

export const homeStore = HomeStore.getInstance(HomeStore);