import styled from "styled-components";

export const FlashcardEl = styled.div`
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


    &.openQuestion{
        justify-content: flex-start;
        align-items: flex-start;

        background-color: #FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        width:250px;
        height: 80px;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 8px;
        position: relative;

        font-family: "Recursive", sans-serif;
        font-weight: 700, bold;
        font-size: 1rem;

        transition: 0.8s ease-in-out;

            ion-icon{
                font-size:1.2rem;
                position: absolute;
                bottom: 10px;
                right: 10px;
            }

    }
`