import react from "react";
import './Header.css';
import logo from "../assets/pngwing.com.png"

export default ({black}) => {
    return (

        <header className={black? 'black' : ''}>
            <div className="header__logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <div className="header__user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="usuarip" />
                </a>
            </div>
        </header>

    )
}