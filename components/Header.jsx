import trollFace from "../images/logo.svg";

export default function Header() {
    return (
        <header className="header">
            <img 
                className="logo"
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}