import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';

const CalculatorButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(CalcContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;
