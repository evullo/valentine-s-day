import Paragraph from "../text/Paragraph.tsx";

const Footer = () => {
    return (
        <footer className="mt-auto text-sm md:text-md lg:text-lg text-white text-center">
            <hr className="w-4/5 bg-white mx-auto mb-2 md:w-1/3"/>
            <Paragraph>Enzo Vullo ⓒ 2024</Paragraph>
        </footer>
    )
}

export default Footer;