export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: 'remove';
    disabled?: boolean;
}

export interface RandomNameDisplayProps {
    randomName: string | null;
    onPickRandomName: () => void;
    names: string[];
}

export interface NameInputProps {
    names: string[];
    onAddName: (name: string) => void;
    onRemoveName: (index: number) => void;
}