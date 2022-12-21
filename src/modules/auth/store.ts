import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../../base/store';

export class AuthStore extends Store {
  isLogged = false;

  constructor() {
    super();
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['isLogged'],
      storage: AsyncStorage,
    });
    makeObservable(this, {
      isLogged: observable,
      loginLogoff: action,
    });
  }

  loginLogoff = () => {
    this.isLogged = !this.isLogged;
  };
}

export const authStore = AuthStore.getInstance(AuthStore);
