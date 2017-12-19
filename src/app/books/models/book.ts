export interface Book {
    _id: {
        $oid: string
    };
    title: string;
    author: string;
    housePublishing: string;
    year: number;
    ISBN: number;
    isBorrowed: boolean;
    idReader: string;
}