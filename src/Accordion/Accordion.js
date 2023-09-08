import AccordionItem from "./AccordionItem"
import { useState } from "react"

export default function Accordion({faqs}) {
  // Lifting state from AccordianItem up to this component so each Item can access the state of the currently open
  const [curOpen, setCurOpen] = useState(null)  
    return (
      <>
        <div className="accordion">
          {/* Below, num={i} is passed to 'AccordianItem' and derived from the ternary to account for numebers 1-9, which would have a leading 0, wherease all others would not. */}
          {faqs.map((faq, i) => 
          <AccordionItem
            onOpen={setCurOpen}
            curOpen={curOpen} 
            title={faq.title} 
            num={i}  
            key={i} 
          > 
            {faq.text} 
          </AccordionItem>
          )}
          {/* Using 'chidlren' once again to pass the static infomration below into the mapped components! */}
          <AccordionItem
            onOpen={setCurOpen}
            curOpen={curOpen} 
            title={'Test 1'} 
            num={23}  
            key='test1' 
          > 
            <p>Allows React developers to:</p>
            <ul>
              <li>
                <strong>Write less code</strong>
              </li>
                <li style={{marginLeft: '40px'}}>Avoid unnecessary re-renders and improve performance.</li>
                <li style={{marginLeft: '40px'}}>Break up UI into components.</li>
                <li style={{marginLeft: '40px'}}>Place state efficiently!</li>
            </ul>
          </AccordionItem>
        </div>
      </>
    )
  }