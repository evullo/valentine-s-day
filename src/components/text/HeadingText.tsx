import {FC, ReactElement, ReactNode, useEffect, useState} from "react";

interface HeaderTextProps {
    type: 1 | 2 | 3,
    children: string | ReactNode,
}

const HeadingText : FC<HeaderTextProps> = ({ type, children }) => {
    const [header, setHeader] = useState<ReactElement>();
    const commonClasses : string = "text-white text-center drop-shadow-xl";

    useEffect(() => {
        let headingElement : ReactElement;

        switch (type) {
            case 1:
                headingElement = <h1 className={`text-4xl ${commonClasses}`}>{children}</h1>;
                break;
            case 2:
                headingElement = <h2 className={`text-3xl ${commonClasses}`}>{children}</h2>;
                break;
            case 3:
                headingElement = <h3 className={`text-2xl ${commonClasses}`}>{children}</h3>;
                break;
            default:
                headingElement = <h4 className={`text-xl ${commonClasses}`}>{children}</h4>;
        }

        setHeader(headingElement);
    }, [type, children])

    return header
}

export default HeadingText;