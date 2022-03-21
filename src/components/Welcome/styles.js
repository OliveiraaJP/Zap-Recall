import styled from "styled-components";

export const Container = styled.div`
height: 100%;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: #FB6B6B;

    span{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    img{
        width: 100px;
        //height: 65px;
        display: block;
        margin-bottom: 10px;
}

    h1{
        color: white;
        font-size: 3rem;
        font-family: 'Righteous', sans-serif;
    }

    button{
        width: 230px;
        height: 50px;
        border-radius: 5px;
        background-color: white;
        color: #D70900;
        border: 1px solid #D70900;
        font-size: 1.2rem;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        cursor: pointer;
    }
`

export const Tela = styled.div`
background-color: #FB6B6B;
height: 100vh;
width: 100vw;
;
`