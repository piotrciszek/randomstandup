export function addName(names: string[], newName: string): string[] {
    return [...names, newName];
  }

export function pickRandomName(names: string[]): string {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    return '';
  }
  export function removeName(names: string[], setNames: (names: string[]) => void, index: number) {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  }
