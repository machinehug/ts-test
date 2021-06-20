import { makeUppercase, replaceSpaces, limitLength } from "../edit/stringHelpers";

export interface Product {
    id: number;
    code: string;
    title: string;
};

export function createProduct(product: Product): Product {
    return {
        id: product.id,
        code: makeUppercase(product.code),
        title: limitLength(12, replaceSpaces(product.title)),
    };
};