import { useState } from 'react';

const EjemploPropsBtn = ({ handleClick }) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const alertText = () => {
        alert('hola');
    }

    const onClick = () => {
        const fixed = text.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '');
        setText(fixed);
        handleClick(alertText);
    }

    // const showConsoleLog = () => {
    //     console.log('hola');
    // }


    return (
        <div>
            {/* <button onClick={() => handleClick( showConsoleLog )}>Clickeame</button> */}
            <input onChange={handleChange}/>
            <button onClick={onClick}>Clickeame</button>
        </div>
    )
}

export default EjemploPropsBtn
