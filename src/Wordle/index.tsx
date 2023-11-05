import {useEffect, useState} from "react";
import {cellCount} from "../constant";
import Keyboard from "./Keyboard";
import Grid from "./Grid";

interface WordleProps {
    matchWord: string;
}

export default function Wordle({matchWord}: WordleProps) {
    const [attempts, setAttempts] = useState<string[]>([]);
    const [currentAttempt, setCurrentAttempt] = useState<string>("");

    const isFinished = attempts.length === 6 || attempts[attempts.length - 1] === matchWord;

    useEffect(() => {
        if (attempts[attempts.length - 1] === matchWord) {
            setTimeout(() => {
                alert("You win!");
            }, 100);
            return;
        }
    }, [attempts]);

    const handleAddChar = (character: string) => {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }

        if (currentAttempt.length === cellCount) {
            alert("No more characters to add!");
            return;
        }

        const newAttempt = currentAttempt + character;
        setCurrentAttempt(newAttempt);
    };

    const handleDeleteChar = () => {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }

        if (currentAttempt.length === 0) {
            alert("No more characters to delete!");
            return;
        }

        const newAttempt = currentAttempt.slice(0, -1);
        setCurrentAttempt(newAttempt);
    };

    const handleSubmitAttempt = () => {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }

        if (currentAttempt.length !== cellCount) {
            alert("Please fill in all the characters!");
            return;
        }

        setAttempts([...attempts, currentAttempt]);
        setCurrentAttempt("");
    };

    return (
        <div className="wordle-game">
            <Grid matchWord={matchWord} attempts={attempts} currentAttempt={currentAttempt}/>
            <Keyboard handleAddChar={handleAddChar} handleDeleteChar={handleDeleteChar}
                      handleSubmitAttempt={handleSubmitAttempt}/>
        </div>
    );
}
