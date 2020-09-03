interface Image {
  display(): void;
}

class RealImage implements Image {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk(fileName);
  }

  display(): void {
    console.log("Displaying " + this.fileName);
  }

  private loadFromDisk(fileName: string) {
    console.log("Loading " + fileName);
  }
}

class ProxyImage implements Image {
  private realImage!: RealImage;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

export default ProxyImage;
