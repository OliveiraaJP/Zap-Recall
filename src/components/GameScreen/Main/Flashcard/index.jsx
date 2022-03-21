import { useState } from "react";
import { FlashcardEl, Box, Risk } from "./styles";
import arrow from "../../../../assets/setinha.png"

function Flashcard(props){
    const {number, question, answer} = props;
    const [flashcard, setFlashcard] = useState("");

    function setFlashcardState(flashcards){
        setFlashcard(flashcards)
    }

    if (flashcard === "") {
		return (
			<FlashcardEl className={flashcard}  >
				<p>Pergunta {number}</p>
				<ion-icon
					name="play-outline"
					onClick={() => {
						setFlashcardState("openQuestion");
					}}
				></ion-icon>
			</FlashcardEl>
		);
	} else if (flashcard === "openQuestion") {
		return (
			<FlashcardEl className={flashcard}>
				<p>{question} <img  src={arrow} 
									alt="arrow"
									onClick={() => {setFlashcardState("openAnswer")}}/></p>
			</FlashcardEl>
		);
	} else if (flashcard === "openAnswer"){
		return (
			<FlashcardEl className={"openAnswer"}> 
                <p>{answer}</p>
				<Box className="red"
				onClick={() => {
							setFlashcardState("redChosen");
							}}>

					<p>Não lembrei</p>
				</Box>

				<Box className="yellow" 
				onClick={() => {
					setFlashcardState("yellowChosen")
					}}>

					<p>Quase não lembrei</p>
				</Box>

				<Box className="green"
				onClick={() => {
					setFlashcardState("greenChosen")
					}}>

					<p>Zap!</p>
				</Box>
            </FlashcardEl>
		);
	} else if( flashcard === "redChosen"){
		return(
		<FlashcardEl className={flashcard}  >
				<Risk className="red">
					Pergunta {number}
					<ion-icon name="close-circle"></ion-icon>
				</Risk>
		</FlashcardEl>
		)}

	else if( flashcard === "yellowChosen"){
		return(
			<FlashcardEl className={flashcard}  >
					<Risk className="yellow">
						Pergunta {number}
						<ion-icon name="help-circle"></ion-icon>
					</Risk>
			</FlashcardEl>
			)
	}

	else if( flashcard === "greenChosen"){
		return(
			<FlashcardEl className={flashcard}  >
					<Risk className="green">
						Pergunta {number}
						<ion-icon name="checkmark-circle"></ion-icon>
					</Risk>
			</FlashcardEl>
			)
	}

}



export default Flashcard;