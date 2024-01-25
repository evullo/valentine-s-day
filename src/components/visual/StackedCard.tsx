import {FC} from "react";
import hearth from "../../assets/globalDesign/hearth.svg";

interface StackedCardProps {
    src: string,
    className?: string,
}

const StackedCard: FC<StackedCardProps> = ({src, className}) => {
    const random : number = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    let hearthPosition : string;

    switch (random) {
        case 1:
            hearthPosition = "top-0 left-0 transform -rotate-12";
            break;
        case 2:
            hearthPosition = "top-0 right-0 transform rotate-12";
            break;
        case 3:
            hearthPosition = "bottom-0 left-0 transform rotate-12";
            break;
        default:
            hearthPosition = "bottom-0 right-0 transform -rotate-12";
    }

    return (
        <div className={className}>
            <div className="absolute bg-rose-500 -z-10 w-full h-full rotate-6 drop-shadow-md rounded-md"></div>
            <div className="absolute bg-rose-400 -z-10 w-full h-full rotate-12 drop-shadow-md rounded-md"></div>
            <div className="relative">
                <img src={src} alt={src} className="w-full h-auto rounded-md"/>
                <img src={hearth} alt="hearth design" className={`absolute w-1/3 ${hearthPosition}`}/>
            </div>
        </div>
    )
}

export default StackedCard;