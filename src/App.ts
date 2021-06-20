import React from "react";
import Heading from "./components/Layout/Heading";
import Paragraph from "./components/Layout/Paragraph";
import Form from "./components/Form/Form";
import "./App.css";

export default function App() {
	return (
		React.createElement("div", {},
			Heading({ txt: "Form" }),
			Paragraph({ txt: "Fill out the form." }),
			Form({ inputType: "text", placeholderTxt: "First name...", labelTxt: "First name" }),
			Form({ inputType: "text", placeholderTxt: "Last name...", labelTxt: "Last name" }),
			Form({ inputType: "email", placeholderTxt: "Email...", labelTxt: "Email" }),
			Form({ inputType: "number", placeholderTxt: "Phone...", labelTxt: "Phone" }),
		)
	);
};