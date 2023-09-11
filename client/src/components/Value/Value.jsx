import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import value from "../../assets/value.png"

const Value = () => {

  
  
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={value} alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText"> Value we give to you</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            nostrum!
          </span>
          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                useMemo(() => {
                    setClassName(null);
                  }, [setClassName]);
              return (
                <AccordionItem
                  key={i}
                  uuid={i}
                  className={`accordionItem ${className}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
