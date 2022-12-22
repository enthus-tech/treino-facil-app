import { action, makeObservable, observable } from 'mobx';
import { openAi } from '../../base/openAi';
import { Store } from '../../base/store';


export class HomeStore extends Store {
  workout?: string = ''
  loading = false;

  constructor() {
    super()
    makeObservable(this, {
      workout: observable,
      loading: observable,
      sendPrompt: action,
    });
  }
  sendPrompt = async (data: any) => {
    const { space, treino, tempo } = data
    this.loading = true;
    const response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `lista de exercicios para ${treino}, com tempo máximo de ${tempo} minutos feito em ${space}?`,
      temperature: 0,
      max_tokens: 400,
      top_p: 0.1,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    });
    this.loading = false;
    this.workout = response.data.choices[0].text
  }
}

export const homeStore = HomeStore.getInstance(HomeStore);