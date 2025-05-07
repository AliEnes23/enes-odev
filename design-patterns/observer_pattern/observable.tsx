type Observer = () => void;

export class Observable {
  private observers: Observer[] = [];

  subscribe(fn: Observer) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Observer) {
    this.observers = this.observers.filter(sub => sub !== fn);
  }

  notify() {
    this.observers.forEach(fn => fn());
  }
}
