import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';

const BackButton = () => {
  const { handleBackButton } = useContext(CalcContext);
  return (
    <button type="button" className="white-button" onClick={() => handleBackButton()}>
      &#8592;
    </button>
  );
};

export default BackButton;
