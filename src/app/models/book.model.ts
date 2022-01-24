import {Chapter} from "./chapter.model";

export class Book {
  name: string;
  chapters: Chapter[];
  accessLevel: number;

  constructor(name: string, chapters: Chapter[], accessLevel: number) {
    this.name = name;
    this.chapters = chapters;
    this.accessLevel = accessLevel;
  }
}
