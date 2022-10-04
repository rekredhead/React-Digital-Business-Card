import reactLogo from './react-logo.png';

export default function Header() {
    return (
        <header className="header">
            <div class="fullLogo">
                <img className="logo" src={reactLogo} alt="React Logo"/>
                <p className="logoPhrase">ReactFacts</p>
            </div>
            <p className="leftText">React Course - Project 1</p>
        </header>
    );
}