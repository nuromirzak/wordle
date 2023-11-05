import Cell, {CellStatus} from "./Cell";
import {cellCount} from "../../constant";
import React from "react";

interface RowProps {
    attempt: string;
    matchWord: string;
    finished: boolean;
}

export default function Row({attempt, matchWord, finished}: RowProps) {
    const getStatus = (index: number) => {
        if (attempt[index] === matchWord[index]) return CellStatus.CORRECT;
        if (matchWord.includes(attempt[index])) return CellStatus.PRESENT;
        return CellStatus.ABSENT;
    };

    const cells: React.ReactComponentElement<typeof Cell>[] = [];

    for (let i = 0; i < cellCount; i++) {
        if (i < attempt.length) {
            cells.push(
                <Cell
                    key={i}
                    character={attempt[i]}
                    status={finished ? getStatus(i) : CellStatus.EMPTY}
                />
            );
        } else {
            cells.push(
                <Cell
                    key={i}
                    character={""}
                    status={CellStatus.EMPTY}
                />
            );
        }
    }


    return (
        <div className="wordle-grid-row">
            {cells}
        </div>
    );
}
