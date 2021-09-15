import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';

const ClearButton = () => {
  const { handleClearValue } = useContext(CalcContext);
  return (
    <button type="button" className="white-button clear-button" onClick={() => handleClearValue()}>
      AC
    </button>
  );
};

export default ClearButton;
