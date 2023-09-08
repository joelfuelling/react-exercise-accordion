import { useState } from "react"

export default function AccordionItem({num, title, text}) {
	const [isOpen, setIsOpen] = useState(false)  

	function handleIsOpen() {
		setIsOpen(!isOpen)
	}
	
	return (
		<>
		<div className={isOpen ? "open item" : "item"} onClick={handleIsOpen}>
			<p className="number">{num < 9 ? `0${num+1}` : num + 1}</p>
			<p className="title"> {title}</p>
			<p className="icon " > {isOpen ? 'x' : '+'} </p>

			{isOpen && <div className="content-box">{text}</div>}

		</div>
		</>
	)
}