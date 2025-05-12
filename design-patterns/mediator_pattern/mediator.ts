type Subscriber = (message: string) => void;

class Mediator {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  notify(message: string) {
    this.subscribers.forEach(sub => sub(message));
  }
}

export const mediator = new Mediator();
