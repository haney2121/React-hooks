import { useState } from 'react';

export const useModal = initalState => {
  const [toggle, setToggle] = useState(initalState);

  return [
    toggle,
    () => {
      setToggle(!toggle);
    }
  ];
};
