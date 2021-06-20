import React from "react";

interface Value {
    placeholder: string,
    type: string,
};

export default function Input({ placeholder, type }: Value) {
    return React.createElement("input", { placeholder: placeholder, type: type });
};