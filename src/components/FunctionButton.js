import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';

const FunctionButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(CalcContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
