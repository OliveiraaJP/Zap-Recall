import { useState } from "react/cjs/react.production.min";

import { FlashcardEl } from "./styles";


function Flashcard(props){
    const {number, question, answer, keyz} = props;


    const [flashcard, setFlashcard] = useState("");

    function setFlashcardState(flashcards){
        setFlashcard(flashcards)
    }


    if (flashcard === "") {
		return (
			<FlashcardEl className={flashcard} key={keyz}>
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
				<p>{question} </p>
			</FlashcardEl>
		);
	} else {
		return (
			<FlashcardEl className={flashcard}> 
                <p>{answer}</p>
            </FlashcardEl>
		);
	}
    

}



export default Flashcard;