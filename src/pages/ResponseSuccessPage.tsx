import HeadingText from "../components/text/HeadingText.tsx";
import Paragraph from "../components/text/Paragraph.tsx";
import happyGif from "../assets/globalDesign/happy.gif";
import BackButton from "../components/interaction/BackButton.tsx";

const ResponseSuccessPage = () => {
    return (
        <div className="my-auto mx-auto">
            <HeadingText type={2}>Trop bien !!!</HeadingText>

            <img className="w-4/5 my-10 mx-auto rounded-md border-2 border-white drop-shadow-md"
                 src={happyGif} alt="homer happy gif"
            />

            <Paragraph>Saucisson et bière pour fêter ça !<br/>On va rester ensemble encore un moment 🥰</Paragraph>
            <BackButton />
        </div>
    )
}

export default ResponseSuccessPage;