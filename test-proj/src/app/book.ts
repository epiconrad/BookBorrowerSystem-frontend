export class IBook {
    constructor(
        public bookId: number,
        public title: string,
        public author: string,
        public category: string, 
        public year: number
    ) {}
}