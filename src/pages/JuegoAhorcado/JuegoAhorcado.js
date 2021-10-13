import { useState } from 'react';
import Button from "../../components/Button/Button"
import Input from '../../components/Input/Input';
import ShowCharacter from '../../components/ShowCharacter/ShowCharacter';
import { TOKEN } from "../../constants/token";
import { START_GAME_URL, TRY_CHARACTER_OR_WORD } from "../../constants/urls";

const JuegoAhorcado = () => {

    const [matcheds, setMatcheds] = useState([]);
    const [totalAttemps, setTotalAttemps] = useState(0);
    const [attempsMade, setAttempsMade] = useState(0);
    const [wrongCharacters, setWrongCharacters] = useState([]);
    const [text, setText] = useState('');

    const startGame = async () => {
        try{
            const response = await fetch(START_GAME_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            const json = await response.json();
            setMatcheds(json.data.matcheds);
            setTotalAttemps(json.data.totalAttemps);
            setAttempsMade(json.data.attempsMade);
            setWrongCharacters(json.data.wrongLetters);
        } catch( error ) {
            alert(error);
        }
    }

    const onChangeText = (e) => {
        setText(e.target.value);
    }

    const tryCharOrWord = async () => {
        try {
            const response = await fetch(TRY_CHARACTER_OR_WORD, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({ text })
            });
            const json = await response.json();
            setMatcheds(json.data.matcheds);
            setTotalAttemps(json.data.totalAttemps);
            setAttempsMade(json.data.attempsMade);
            setWrongCharacters(json.data.wrongLetters);
        } catch( error ) {
            alert(error);
        }
    }

    return (
        <div>
            <Button handleClick={startGame} text='Comenzar juego'/>
            <div style={{display: 'flex'}}>
                {matcheds.map( (m, i) => {
                    return <ShowCharacter key={i} character={m}/>
                })}
            </div>
            <h3>Intentos hechos: {attempsMade} / {totalAttemps}</h3>
            <h6>Letras equivocadas: {wrongCharacters.map( (w, i) => {
                return <span key={i} style={{color: 'red'}}>{w}</span>
            })}</h6>

            <div>
                <Input handleChange={onChangeText} value={text}/>
                <Button handleClick={tryCharOrWord} text="Intentar"/>
            </div>
        </div>
    )
}

export default JuegoAhorcado;
