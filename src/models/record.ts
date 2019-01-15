import { ThrowStmt } from "@angular/compiler";

export class Record {
    name: string;
    author: string;
    image: string;
    type: string;
    detail: string;

    constructor(name: string, author: string, image: string, type: string, detail: string) {
        this.name = name;
        this.author = author;
        this.image = image;
        this.type = type;
        this.detail = detail;
    }
}