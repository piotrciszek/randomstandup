import React, { useState } from "react";
import NameInput from "../components/NameInput";
import RandomNameDisplay from "../components/RandomNameDisplay";

const RandomPickerPage: React.FC = () => {
    const [names, setNames] = useState<string[]>([]);
    const [ randomName, setRandomName] = useState<string | null>(null);

    const handleAddName = (newName: string) => {
        setNames(prevNames => [...prevNames, newName]);
    };

    const handleRemoveName = (index: number) => {
        setNames(prevNames => prevNames.filter((_, i) => i !== index));
    }

    const handlePickerRandomName = () => {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            setRandomName(names[randomIndex]);
        }
    };
    return (
        <div>
            <NameInput
                names={names}
                onAddName={handleAddName}
                onRemoveName={handleRemoveName}
            />
            <RandomNameDisplay
                randomName={randomName}
                onPickRandomName={handlePickerRandomName}
                names={names}
            />
        </div>
    );
}

export default RandomPickerPage;