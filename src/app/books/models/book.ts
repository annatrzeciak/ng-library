export interface Book {
    // _id: {
    //     $oid: string
    // };
    title: string;
    author: string;
    housePublishing: string;
    year: number;
    category: Array<string>;
    ISBN: string;
    isBorrowed: boolean;
    idReader: string;
}