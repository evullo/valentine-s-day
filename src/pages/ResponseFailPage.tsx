import HeadingText from "../components/text/HeadingText.tsx";
import Paragraph from "../components/text/Paragraph.tsx";

import sadGif from "../assets/globalDesign/sad.gif";
import BackButton from "../components/interaction/BackButton.tsx";

const ResponseFailPage = () => {
  return (
      <div className="my-auto mx-auto">
          <HeadingText type={2}>Pourquoi ???</HeadingText>

          <img className="w-4/5 my-10 mx-auto rounded-md border-2 border-white drop-shadow-md"
             src={sadGif} alt="homer crying gif"
          />

          <Paragraph>Je vais donc mourir de tristesse... <br />Mon petit coeur est brisé 💔</Paragraph>
          <BackButton />
      </div>
  )
}

export default ResponseFailPage;