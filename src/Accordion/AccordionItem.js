// From Accordian.js, num = the index from the faqs.map(), so we're pulling each divs "id #" when we click it
export default function AccordionItem({num, title, text, curOpen, onOpen, children}) {
	// Here, isOpen being set to (num === curOpen) is BASICALLY a setter variable
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
			{isOpen && <div className="content-box">{children}</div>}

		</div>
		</>
	)
}