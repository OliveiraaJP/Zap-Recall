import styled from 'styled-components';

export const MainEl = styled.div`
background-color: #FB6B6B;
margin-top: 15vh;
margin-bottom: 15vh;
min-height: 70vh;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;

`


export const QuestionEl = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 4px 5px 0px #00000026;
border-radius: 5px;
height: 40px;
width: 250px;
margin-bottom: 8px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;

font-family: "Recursive", sans-serif;
font-weight: 700, bold;
font-size: 1rem;

    ion-icon{
        font-size:1.2rem;
    }
`
