import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
  const { number } = useContext(CalcContext);
  return (
    <DisplayStyles>
      <h2>
        {!number.length ? '0' : number}
      </h2>
    </DisplayStyles>
  );
};

export default Display;
