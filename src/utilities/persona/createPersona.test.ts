import { createPersona } from "./createPersona";

test("Add values to object properties", function () {

    const age: number = 18;
    const name: string = "John";

    expect(createPersona(name, age)).toEqual({ name: name, age: age });
});