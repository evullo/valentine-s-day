import HeadingText from "../text/HeadingText.tsx";
import Paragraph from "../text/Paragraph.tsx";
import Button from "../interaction/Button.tsx";

const Form = () => {
  return (
      <div className="mt-5 mb-20">
          <HeadingText type={2}>Juste une petite question...</HeadingText>
          <Paragraph>Après toutes ces années et pour l'année qui vient,<br/>veux-tu être ma Valentine ?? 🙈</Paragraph>
          <div className="flex justify-center items-center mt-10">
              <Button isSuccess={false}>Non</Button>
              <Button isSuccess={true}>Oui</Button>
          </div>
      </div>
  )
}

export default Form;