import React from "react";

interface Value {
    txt: string;
};

export default function Paragraph({ txt }: Value) {
    return React.createElement("p", {}, txt);
};