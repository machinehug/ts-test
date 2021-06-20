import React from "react";

interface Value {
    val: string;
};

export default function Label({ val }: Value) {
    return React.createElement("label", {}, val);
};
