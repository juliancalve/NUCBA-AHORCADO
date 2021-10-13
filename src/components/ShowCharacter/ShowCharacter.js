import React from 'react'

const ShowCharacter = ({ character }) => {
    return (
        <div style={{width: '60px'}}>
            <div style={{width: '95%', borderBottom: '1px solid #000'}}>
                <h6>{ character !== '' ? character : '-' }</h6>
            </div>
        </div>
    )
}

export default ShowCharacter
