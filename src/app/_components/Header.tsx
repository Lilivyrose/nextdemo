import './header.css'; 

function Header() {
    return (
        <div className="header">
            <h1>LOGO</h1>
            <ul className="flex ">
                <a href=""><li className="mr-4">Log-In</li></a>
                <a href=""><li>Sign-In</li></a>
            </ul>
        </div>
    );
}
export default Header;