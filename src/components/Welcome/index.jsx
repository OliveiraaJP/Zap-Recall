import { Tela } from "./styles";
import { Container } from "./styles";

function Welcome() {
  return (
    <Tela>
      <Container>
        <span>
          <img src="./assets/logo.png" alt="logo" />
          <h1>ZapRecall</h1>
        </span>
        <button>Iniciar Recall!</button>
      </Container>
    </Tela>
  );
}

export default Welcome;
