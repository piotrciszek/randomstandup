import { useState, useEffect } from 'react';

function usePersistedState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? (savedValue as unknown as T) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state as unknown as string);
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
