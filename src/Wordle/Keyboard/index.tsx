import Key, {KeyType} from "./Key";
import Row from "./Row";
import React from "react";

interface KeyboardProps {
    handleAddChar: (character: string) => void;
    handleDeleteChar: () => void;
    handleSubmitAttempt: () => void;
}

export default function Keyboard({handleAddChar, handleDeleteChar, handleSubmitAttempt}: KeyboardProps) {
    const firstRow: React.ReactComponentElement<typeof Key>[] = [];

    ["Ә", "І", "Ң", "Ғ", "Ү", "Ұ", "Қ", "Ө", "Һ"].forEach((character) => {
        firstRow.push(<Key text={character} onClick={() => handleAddChar(character)} key={character}
                           type={KeyType.DEFAULT}/>);
    });
    firstRow.push(<Key text="⌫" onClick={handleDeleteChar} key="⌫" type={KeyType.DELETE}/>);

    const secondRow: React.ReactComponentElement<typeof Key>[] = [];

    ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х"].forEach((character) => {
        secondRow.push(<Key text={character} onClick={() => handleAddChar(character)} key={character}
                            type={KeyType.DEFAULT}/>);
    });

    const thirdRow: React.ReactComponentElement<typeof Key>[] = [];

    ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"].forEach((character) => {
        thirdRow.push(<Key text={character} onClick={() => handleAddChar(character)} key={character}
                           type={KeyType.DEFAULT}/>);
    });

    const fourthRow: React.ReactComponentElement<typeof Key>[] = [];

    ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю"].forEach((character) => {
        fourthRow.push(<Key text={character} onClick={() => handleAddChar(character)} key={character}
                            type={KeyType.DEFAULT}/>);
    })

    fourthRow.push(<Key text="Енгізу" onClick={handleSubmitAttempt} key="Енгізу" type={KeyType.SUBMIT}/>);

    return (
        <div className="wordle-keyboard">
            <Row keys={firstRow}/>
            <Row keys={secondRow}/>
            <Row keys={thirdRow}/>
            <Row keys={fourthRow}/>
        </div>
    );
}