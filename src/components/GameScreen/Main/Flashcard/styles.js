import styled from "styled-components";

export const FlashcardEl = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 4px 5px 0px #00000026;
border-radius: 5px;
position: relative;

height: 65px;
width: 300px;
margin-bottom: 15px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;

font-family: "Recursive", sans-serif;
font-weight: 700, bold;
font-size: 1.1rem;

    ion-icon{
        font-size:1.5rem;
        cursor: pointer;
    }


    &.openQuestion{
        justify-content: flex-start;
        align-items: flex-start;

        background-color: #FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        width:299px;
        height: 131px;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 15px;
        position: relative;

        font-family: "Recursive", sans-serif;
        font-weight: 700, bold;
        font-size: 1rem;

        transition: 0.8s ease-in-out;

            img{
                position: absolute;
                bottom: 10px;
                right: 10px;
                cursor: pointer;
            }
        }

        &.openAnswer{
            justify-content: flex-start;
            align-items: flex-start;

            background-color: #FFFFD4;
            box-shadow: 0px 4px 5px 0px #00000026;
            width:299px;
            height: 131px;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 15px;
            position: relative;

            font-family: "Recursive", sans-serif;
            font-weight: 700, bold;
            font-size: 1rem;

            transition: 0.8s ease-in-out;

                img{
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                }
        }
`

export const Box = styled.div`
position: absolute;
font-size: 12px;
width: 85px;
height: 37px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;

        &.red{
            background-color: #FF3030;
            bottom: 10px;
            left: 10px;            
        }

        &.yellow{
            background-color: #FF922E;
            bottom: 10px;
            left: 35%;
            text-align: center;
            
        }

        &.green{
            background-color: #2fbe34;
            bottom: 10px;
            right: 10px; 
        }
`

export const Risk = styled.p`
text-decoration: line-through;


        &.red{
            color: #FF3030;
            ion-icon{
                color:#FF3030;
                font-size: 23px;
                position: absolute;
                right: 5%;
                cursor: default;
            }
        }

        &.yellow{
            color: #FF922E;
            ion-icon{
                color:#FF922E;
                font-size: 23px;
                position: absolute;
                right: 5%;
                cursor: default;
            }
        }

        &.green{
            color:#2fbe34;
            ion-icon{
                color:#2fbe34;
                font-size: 23px;
                position: absolute;
                right: 5%;
                cursor: default;
            }
        }

`