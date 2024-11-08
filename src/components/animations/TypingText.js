import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../motion";
import React from "react";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles = "" }) => (
  <motion.p variants={textContainer} className={`${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
