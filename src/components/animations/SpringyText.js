import SpringyLetter from "./SpringyLetter";
import { twMerge } from "tailwind-merge";
import React from "react";

interface SpringyTextProps {
  text: string;
  className?: string;
}

const SpringyText: React.FC<SpringyTextProps> = ({ text, className }) => {
  const springyTextParentClass = twMerge(`
    ${className}
    flex 
    flex-wrap 
    gap-x-3 
    md:justify-start
  `);

  const words = text.split(" ");

  const getSpringyLetters = (word: string) => {
    const letters = word.split("");
    return letters.map((letter, i) => (
      <SpringyLetter key={letter + i} letter={letter} />
    ));
  };

  const springyText = words.map((word, index) => (
    <div key={index}>{getSpringyLetters(word)}</div>
  ));

  return <h1 className={springyTextParentClass}>{springyText}</h1>;
};

export default SpringyText;
