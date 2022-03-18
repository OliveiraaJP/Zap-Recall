import { MainEl, QuestionEl } from "./styles";


const vetor = <ion-icon name="play-outline"></ion-icon>

function Main(){
const deck1 = [
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
    {question:"teste?", answer:"testou bolado"},
]


    return(
        <MainEl>
        {deck1.map((card, index) => {
            const {question, answer} = card
            return <QuestionEl> Pergunta {index + 1} {vetor}</QuestionEl>
        })}
        </MainEl>
    )
}

export default Main;