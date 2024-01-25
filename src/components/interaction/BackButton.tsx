import {Link} from "react-router-dom";
import back from "../../assets/globalDesign/back.svg";

const BackButton = () => {
  return (
      <div className="flex items-center mb-10">
          <Link to="/" className="ml-auto">
              <img className="w-8 md:w-10 lg:w-12 hover:bg-red-900 rounded-md" src={back} alt="back arrow"/>
          </Link>
          <p className="ml-2 mr-auto text-white text-sm md:text-md lg:text-lg">Retour à la page principale</p>
      </div>
  )
}

export default BackButton;