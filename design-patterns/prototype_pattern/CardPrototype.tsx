export interface CardPrototype {
    clone(): CardPrototype;
  }
  
  export class InfoCard implements CardPrototype {
    constructor(
      public title: string,
      public description: string,
      public color: string
    ) {}
  
    clone(): InfoCard {
      return new InfoCard(this.title, this.description, this.color);
    }
  }
  