import {FC, ReactNode} from "react";

interface ParagraphProps {
    children: string | ReactNode,
}

const Paragraph : FC<ParagraphProps> = ({ children }) => {
  return (
      <p className="text-sm md:text-md lg:text-lg text-white drop-shadow-lg mx-auto text-center my-5">
        {children}
      </p>
  )
}

export default Paragraph;