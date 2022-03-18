import { Tela, Container } from "./styles";
import imgLogo from "../../assets/logo.png"

function Welcome({fn}) {
  return (
    <Tela>
      <Container>
        <span>
          <img src={imgLogo} alt="quizz logo" />
          <h1>ZapRecall</h1>
        </span>
        <button onClick ={fn}>Iniciar Recall!</button>
      </Container>
    </Tela>
  );
}

export default Welcome;
