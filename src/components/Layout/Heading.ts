import React from "react";

interface Value {
	txt: string;
};

export default function Heading({ txt }: Value) {
	return React.createElement("h1", { className: "title" }, txt);
};