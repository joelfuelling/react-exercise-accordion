import AccordionItem from "./AccordionItem"
import { useState } from "react"

export default function Accordion({faqData}) {
  const [curOpen, setIsOpen] = useState(null)  
    return (
      <>
        <div className="accordion">
          {/* Below, num={i} is passed to 'AccordianItem' and derived from the ternary to account for numebers 1-9, which would have a leading 0, wherease all others would not. */}
          {faqData.map((faq, i) => 
          <AccordionItem
          onOpen={setIsOpen}
            curOpen={curOpen} 
              title={faq.title} 
                num={i}  
                  text={faq.text} 
                    key={i} /> 
          )}
        </div>
      </>
    )
  }