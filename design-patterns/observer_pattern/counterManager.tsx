import { Observable } from "./observable";

export class CounterManager extends Observable {
  private count = 0;

  get value() {
    return this.count;
  }

  increment() {
    this.count++;
    this.notify();
  }
}

export const counter = new CounterManager();
