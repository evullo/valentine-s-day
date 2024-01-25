import HeadingText from "../text/HeadingText.tsx";

const Header = () => {
    return (
        <header className="my-10">
            <HeadingText type={1}>Joyeuse Saint-Valentin ! <br/> 🫶</HeadingText>
            <hr className="w-4/5 bg-white mx-auto mt-2 md:w-1/3" />
        </header>
    )
}

export default Header;