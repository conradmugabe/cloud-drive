import React from 'react';

type Options<T> = {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
};

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  { serialize = JSON.stringify, deserialize = JSON.parse }: Options<T> = {}
) => {
  const [value, setValue] = React.useState(() => {
    const valueInLocalStorage = localStorage.getItem(key);

    if (valueInLocalStorage && valueInLocalStorage !== 'undefined') {
      return deserialize(valueInLocalStorage);
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  const preKeyRef = React.useRef(key);

  React.useEffect(() => {
    const preKey = preKeyRef.current;
    if (preKey !== key) {
      localStorage.removeItem(preKey);
    }
    preKeyRef.current = key;
    localStorage.setItem(key, serialize(value));
  }, [value, setValue]);

  return [value, setValue];
};
