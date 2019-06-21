import { useState } from 'react';
export const useFocus = (initialFocus = false, id = "") => {
  const [focus, setFocus] = useState(initialFocus);
  return ([
    setFocus, {
      autoFocus: focus,
      key: `${id}${focus}`,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    },
  ]);
};
