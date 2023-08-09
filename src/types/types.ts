export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: 'remove';
}

export interface RandomNameDisplayProps {
    randomName: string;
    onPickRandomName: () => void;
    names: string[];
}

export interface NameInputProps {
    names: string[];
    onAddName: (name: string) => void;
    onRemoveName: (index: number) => void;
}