import Paragraph from "../components/text/Paragraph.tsx";
import StackedCard from "../components/visual/StackedCard.tsx";
import Form from "../components/visual/Form.tsx";
import HeadingText from "../components/text/HeadingText.tsx";

import line from "../assets/globalDesign/line.svg";
import rheto21 from "../assets/images/rhetos21.jpg";
import bruges21 from "../assets/images/brugge21.jpeg";
import birthday21 from "../assets/images/birthday21.jpeg";
import noel21 from "../assets/images/noel21.jpeg";
import newYear22 from "../assets/images/newYear22.jpeg";
import sicily22 from "../assets/images/sicily22.jpg";
import canada23 from "../assets/images/canada23.jpg";
import chapi23 from "../assets/images/chapi23.jpeg";
import newYear23 from "../assets/images/newYear23.jpeg";

const MainPage = () => {
    const commonDivStyle : string = "absolute z-10 flex flex-nowrap items-center";
    const commonImgStyle : string = "relative w-1/3";

    return (
        <main className="relative w-fit mx-auto">
            <div>
                <HeadingText type={3}>Pour commencer...</HeadingText>
                <Paragraph>Récapitulons un peu<br/>(La 4e secondaire, c'était trop loin sorry)</Paragraph>
            </div>

            <img className="px-10 mb-10 md:mx-auto" src={line} alt="long line from top to bottom"/>

            <div className={`${commonDivStyle} top-[6%]`}>
                <Paragraph>Notre diplôme de rhétos en 2021</Paragraph>
                <StackedCard className={`${commonImgStyle} mr-5`} src={rheto21}/>
            </div>

            <div className={`${commonDivStyle} top-[15%]`}>
                <StackedCard className={`${commonImgStyle} ml-5`} src={bruges21}/>
                <Paragraph>Voyage à Bruges en famille</Paragraph>
            </div>

            <div className={`${commonDivStyle} top-[24%]`}>
                <Paragraph>Tes 18 ans, enfin majeure</Paragraph>
                <StackedCard className={`${commonImgStyle} mr-5`} src={birthday21}/>
            </div>

            <div className={`${commonDivStyle} top-[35%]`}>
                <StackedCard className={`${commonImgStyle} ml-5`} src={noel21}/>
                <Paragraph>Noël 2021 sur le marché</Paragraph>
            </div>

            <div className={`${commonDivStyle} top-[42%]`}>
                <Paragraph>Nouvel an 2022 en famille</Paragraph>
                <StackedCard className={`${commonImgStyle} mr-5`} src={newYear22}/>
            </div>

            <div className={`${commonDivStyle} top-[51%]`}>
                <StackedCard className={`${commonImgStyle} ml-5`} src={sicily22}/>
                <Paragraph>Notre voyage en Sicile en famille</Paragraph>
            </div>

            <div className={`${commonDivStyle} top-[62%]`}>
                <Paragraph>Premier long voyage ensemble au Canada</Paragraph>
                <StackedCard className={`${commonImgStyle} mr-5`} src={canada23}/>
            </div>

            <div className={`${commonDivStyle} top-[73%]`}>
                <StackedCard className="relative w-2/3 ml-5" src={chapi23}/>
                <Paragraph>Les chapis c'est quand même important</Paragraph>
            </div>

            <div className={`${commonDivStyle} top-[80%]`}>
                <Paragraph>Et pour finir,<br/>notre dernier nouvel an</Paragraph>
                <StackedCard className={`${commonImgStyle} mr-5`} src={newYear23}/>
            </div>

            <Form/>
        </main>
    )
}

export default MainPage;