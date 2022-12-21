export class Store {
  private static instance: any | undefined;
  public static getInstance<T>(c: { new (): T }): T {
    if (!this.instance) {
      this.instance = new c();
    }
    return this.instance;
  }
}
