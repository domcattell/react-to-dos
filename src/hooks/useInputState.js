import {useState} from 'react';

const useInputState = (init) => {
    const [value, setValue] = useState(init)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const reset = () => {
        setValue("");
    }
    return [value, handleChange, reset]
}
export default useInputState;
