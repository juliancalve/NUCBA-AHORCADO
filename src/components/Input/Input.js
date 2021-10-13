const Input = ({ value, handleChange }) => {
    return (
        <div>
            <input onChange={handleChange} value={value} />
        </div>
    )
}

export default Input
