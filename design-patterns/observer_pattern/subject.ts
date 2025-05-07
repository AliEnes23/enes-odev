type Observer = {
  update: (state: number) => void;
};

class Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.state));
  }

  setState(newState: number) {
    this.state = newState;
    this.notifyObservers();
  }

  getState(): number {
    return this.state;
  }
}

export default new Subject();
