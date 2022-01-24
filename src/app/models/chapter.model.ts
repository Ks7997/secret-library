// Describes a single chapter
export class Chapter {
  title: string;
  symbolsCount: number;
  rating: number;

  constructor(title: string, symbolsCount: number, rating: number) {
    this.title = title;
    this.symbolsCount = symbolsCount;
    this.rating = rating;
  }
}
