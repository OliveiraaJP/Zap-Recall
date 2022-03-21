import { useState } from "react"
import Welcome from "./components/Welcome";
import GameScreen from "./components/GameScreen"

export default function App() {
    
    const [game, setGame] = useState(false);

    function startGame(value){
        setGame(value);
    }
    
    return (
        <>
            {!game && <Welcome fn={() => startGame(!game)}/>} {game && <GameScreen/>}
        </>
    )
}