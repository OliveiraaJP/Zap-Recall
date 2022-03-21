import {FooterDiv} from './styles';
import { useState } from 'react';


const [finalgame, setFinalgame] = useState(0)

function Footer(){
return(
    <FooterDiv>
        <p>0/8 CONCLUIDOS</p>
    </FooterDiv>
)
}

export default Footer;