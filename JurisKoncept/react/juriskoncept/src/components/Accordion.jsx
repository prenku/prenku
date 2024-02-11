import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { sherbimet } from "../assets/data";
export default function Accordion() {
  const items = sherbimet.services.map((item) => ({
    title: item.title || "Title",
    content: item.description || "Content",
    isOpen: false || false,
  }));
  const [accordionItems, setAccordionItems] = useState(items);

  const toggleAccordionItem = (index) => {
    const updatedAccordionItems = [...accordionItems];
    updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
    setAccordionItems(updatedAccordionItems);
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggleAccordion={() => toggleAccordionItem(index)}
        />
      ))}
    </div>
  );
}
