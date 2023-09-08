import AccordionItem from "./AccordionItem"

export default function Accordion({faqData}) {
    return (
      <>
          <div className="accordion">
              {/* Below, num={i} is passed to 'AccordianItem' and derived from the ternary to account for numebers 1-9, which would have a leading 0, wherease all others would not. */}
              {faqData.map((faq, i) => <AccordionItem title={faq.title} num={i}  text={faq.text} key={i} /> )}
          </div>
    </>
    )
  }