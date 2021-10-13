import { useState } from 'react';
import EjemploPropsBtn from './EjemploPropsBtn'

const EjemploProps = () => {

    const [parentText, setParentText] = useState('');

    //Esta es la funcion que se le va a pasar al comp hijo
    // que recibe por parametros la funcion que me trae el hijo
    const parentHandleClick = (callback) => {
        callback();
    }

    return (
        <div>
            <EjemploPropsBtn handleClick={parentHandleClick} />
            <h1>{parentText}</h1>
        </div>
    )
}

export default EjemploProps
