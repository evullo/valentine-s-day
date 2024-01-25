import errorGif from "../assets/globalDesign/error.gif";
import HeadingText from "../components/text/HeadingText.tsx";
import Paragraph from "../components/text/Paragraph.tsx";
import BackButton from "../components/interaction/BackButton.tsx";

const ErrorPage = () => {
    return (
        <div className="my-auto mx-auto">
            <HeadingText type={2}>404 - Not Found</HeadingText>

            <img className="w-4/5 my-10 mx-auto rounded-md border-2 border-white drop-shadow-md"
               src={errorGif} alt="homer searching gif"
            />

            <Paragraph>Il n'y a rien à voir ici ! <br/> La page que vous recherchez n'existe pas</Paragraph>
            <BackButton />
        </div>
    )
}

export default ErrorPage;