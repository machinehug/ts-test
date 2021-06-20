import React from "react";
import Label from "./Label";
import Input from "./Input";

interface Values {
    inputType: string,
    placeholderTxt: string,
    labelTxt: string,
};

export default function Form({ inputType, placeholderTxt, labelTxt }: Values) {
    return React.createElement("div", {},
        Label({ val: labelTxt }),
        Input({ placeholder: placeholderTxt, type: inputType }),
    );
};