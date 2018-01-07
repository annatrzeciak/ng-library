import { Book } from "../../books/models/book";

export interface Reader {
    _id: {
        $oid: string
    };
    name: string;
    surname: string;
    postalCode: string;
    city: string;
    street: string;
    houseNumber: string;
    phone: string;
    books: Array<string>;
    numberBooks: number;
}