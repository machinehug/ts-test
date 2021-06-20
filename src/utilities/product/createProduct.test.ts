import { createProduct } from "./createProduct";
import { expect } from "@jest/globals";

const passProduct = { id: 12, code: "d f g", title: "This_is_the_something" };
const returnProduct = { id: 12, code: "D F G", title: "This_is_the_" };

test("Validate new product", () => {
    expect(createProduct(passProduct)).toEqual(returnProduct);
});