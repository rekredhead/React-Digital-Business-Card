export default function Header() {
    return (
        <header>
            <img src="logo192.png" alt="Profile" width="200px"/>
            <div className="userInfo">
                <h1>Kehan Insitha</h1>
                <h3>Computer Science Student</h3>
                <p>kehaninsitha@gmail.com</p>
            </div>
            <div className="infoLinks">
                <button className="emailBtn">Email</button>
                <button className="linkedinBtn">LinkedIn</button>
            </div>
        </header>
    );
}