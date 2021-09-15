import React from 'react';
import Calculator from './components/Calculator';
import CalcProvider from './components/CalcProvider';


function App() {

    return(
        <CalcProvider>
            <Calculator />
        </CalcProvider>
    )
}

export default App;