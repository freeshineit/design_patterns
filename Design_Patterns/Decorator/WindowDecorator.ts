// https://zh.wikipedia.org/wiki/%E4%BF%AE%E9%A5%B0%E6%A8%A1%E5%BC%8F#Java
// The Window interface class
interface Win {
  draw(): void; // Draws the Window
  getDescription(): string; // Returns a description of the Window
}

// abstract decorator class - note that it implements Window
class WindowDecorator implements Win {
  protected decoratedWindow: Win; // the Window being decorated

  constructor(decoratedWindow: Win) {
    this.decoratedWindow = decoratedWindow;
  }

  draw() {
    this.decoratedWindow.draw();
  }

  getDescription() {
    return this.decoratedWindow.getDescription();
  }
}

// implementation of a simple Window without any scrollbars
class SimpleWindow implements Win {
  draw() {
    // Draw window
    console.log("Draw window");
  }

  getDescription() {
    return "simple window";
  }
}

// The first concrete decorator which adds vertical scrollbar functionality
class VerticalScrollBar extends WindowDecorator {
  constructor(windowToBeDecorated: Win) {
    super(windowToBeDecorated);
  }

  draw() {
    super.draw();
    this.drawVerticalScrollBar();
  }

  drawVerticalScrollBar() {
    // Draw the vertical scrollbar
    console.log("Draw the vertical scrollbar");
  }

  getDescription() {
    return super.getDescription() + ", including vertical scrollbars";
  }
}

export { SimpleWindow, VerticalScrollBar };
