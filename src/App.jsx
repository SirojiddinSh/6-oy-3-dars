import "./App.css";
import audioSound from "./audio/tring.mp3";
import { useState } from "react";

function App() {
    let [audio] = useState(new Audio(audioSound));
    let count = 0;

    function playCount() {
        audio.play();
    }

    function click() {
        count++;
        document.querySelector("input").value = count;

        if (count == 33 || count == 66 || count == 99) {
            playCount();
        }

        if (count == 100) {
            count = 0;
            document.querySelector("input").value = count;
        }
    }

    function reset() {
        count = 0;
        document.querySelector("input").value = count;
    }

    return (
        <>
            <div className="tasbeh">
                <div className="tasbeh__bg__img">
                    <input type="text" value={count} />
                    <button onClick={reset} className="reset"></button>
                    <button onClick={click} className="click"></button>
                </div>
            </div>
        </>
    );
}

export default App;
