import { useState } from "react"

export default function AccordionItem({num, title, text, curOpen, onOpen}) {

	const isOpen = num === curOpen

	function handleToggle() {
		onOpen(num)
	}
	
	return (
		<>
		<div className={isOpen ? "open item" : "item"} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num+1}` : num + 1}</p>
			<p className="title"> {title}</p>
			<p className="icon " > {isOpen ? 'x' : '+'} </p>

			{isOpen && <div className="content-box">{text}</div>}

		</div>
		</>
	)
}