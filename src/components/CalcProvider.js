import React, { useState, createContext, useEffect } from 'react';
import io from 'socket.io-client';
import { CalcMessageStyles } from './styles/Styles';

export const CalcContext = createContext();

const initialState = [];

function reducer(state, action) {
    const { msg, messages } = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return ([{msg}, ...state])
        default:
            return state;
    }
}

let socket;

const sendChatAction = (value) => {
    socket.emit('chat message', value);
}

const CalcProvider = props => {

    const [number, setNumber] = useState('');

    // reducer checks for local storage
    const [allCalculations, dispatch] = React.useReducer(reducer, initialState, () => {
        const localData = localStorage.getItem("allCalculations");
        return localData ? JSON.parse(localData) : [];
    });

    // employing useEffect hook to add to local storage
    useEffect(() => {
        localStorage.setItem("allCalculations", JSON.stringify(allCalculations))
    }, [allCalculations]);

    if(!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
        });
    }

    // takes care of displaying the digit clicked
    const handleSetDisplayValue = num => {
        if ((!number.includes('.') || num !== '.') && number.length < 16) {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    // resets calculator
    const handleClearValue = ()  => {
        setNumber('');
    };

    // allows deletion of character input, one by one
    const handleBackButton = () => {
        if(number !== '') {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        };
    }

    // creates calculation string, calculates total
    const calculate = () => {
        setNumber(String(eval(number)));
        handleClearValue();
    };

    // custom hook; takes care of storing calculations locally between sessions
    function useLocalState(localItem) {
        
        const [local, setState] = useState(localStorage.getItem(localItem));

        function setLocal(newItem) {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [local, setLocal];
    }

    return (
        <CalcContext.Provider
            value={{
                allCalculations,
                calculate,
                handleBackButton,
                handleClearValue,
                handleSetDisplayValue,
                number,
                sendChatAction,
                setNumber
            }}
        >
            {props.children}
        <CalcMessageStyles>
            <div className="messagesWrapper">
                {allCalculations.slice(0,10).map((message, i) => (
                    <div className="calcMessage" value={message.msg} key={i}>
                        {message.msg}
                    </div>
                ))}
            </div>
        </CalcMessageStyles>
        </CalcContext.Provider>
    );
};

export default CalcProvider;