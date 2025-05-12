type Style = React.CSSProperties;

class FlyweightFactory {
  private styles: Record<string, Style> = {};

  getStyle(type: string): Style {
    if (!this.styles[type]) {
      if (type === "admin") {
        this.styles[type] = {
          backgroundColor: "#ffe0e0",
          color: "#b00020",
          border: "1px solid #b00020",
        };
      } else {
        this.styles[type] = {
          backgroundColor: "#e0f7fa",
          color: "#00796b",
          border: "1px solid #00796b",
        };
      }
    }
    return this.styles[type];
  }
}

export const styleFactory = new FlyweightFactory();
