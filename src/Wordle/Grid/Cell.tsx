interface CellProps {
    character: string;
    status: CellStatus;
}

export enum CellStatus {
    CORRECT = "correct",
    PRESENT = "present",
    ABSENT = "absent",
    EMPTY = "empty"
}

export default function Cell({character, status}: CellProps) {
    return (
        <div className={`wordle-grid-cell ${status}`}>
            {character}
        </div>
    );
}
