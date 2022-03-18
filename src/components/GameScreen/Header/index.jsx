import imgLogo from "../../../assets/logo.png"
import {Logo} from "./styles";


function Header(){
    return(
        <Logo>
            <img src={imgLogo} alt="logo img" />
            <p>ZapRecall</p>
        </Logo>
    )
}
export default Header;