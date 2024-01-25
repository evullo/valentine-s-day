import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";

interface ButtonProps {
    isSuccess: boolean,
    children: string | ReactNode;
}

const Button: FC<ButtonProps> = ({ isSuccess, children }) => {
    const link : string = isSuccess ? "success" : "fail";
    const classNames : string = "text-sm md:text-md lg:text-lg text-white border border-white px-5 py-2 bg-red-900 rounded-md";
    const hoverEffects: string = " transition duration-300 ease-out hover:bg-white hover:text-red-900 hover:ease-in";
    return (
        <Link to={link} className="mx-10">
            <button className={classNames + hoverEffects}>{children}</button>
        </Link>
    )
}

export default Button;