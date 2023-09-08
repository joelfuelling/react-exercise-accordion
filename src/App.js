import { useState } from "react";
import './index.css'

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
     <Accordion faqData={faqs}/>
    </div> 
  );
}

function Accordion({faqData}) {
  return (
    <>
		<div className="accordion">
			{/* Below, i is passed to 'AccordianItem' and derived from the ternary to account for numebers 1-9, which would have a leading 0, wherease all others would not. */}
			{faqData.map((faq, i) => <AccordianItem title={faq.title} num={i}  text={faq.text} key={i} /> )}
		</div>
  </>
  )
}

function AccordianItem({num, title, text}) {
	const [isOpen, setIsOpen] = useState(false)  

	function handleIsOpen() {
		setIsOpen(!isOpen)
	}
	
	return (
		<>
		<div className={isOpen ? "open item" : "item"}>
			<p className="number">{num < 9 ? `0${num+1}` : num + 1}</p>
			<p className="title"> {title}</p>
			<p className="icon " onClick={handleIsOpen}> {isOpen ? '-' : '+'} </p>

			{isOpen && <div className="content-box">{text}</div>}

		</div>
		</>
	)
}
