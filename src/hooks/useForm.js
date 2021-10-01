// write your custom hook here to control your checkout form
import React from 'react';
const useLocalStorage = (key, ininitalValue) => {
    const [storedValue, setStoredValue] = useState(()=> {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : ininitalValue;
    });
    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }
    return [storedValue, setValue]
}


const useForm = () => {
const [value, setValue] = useLocalStorage('formValues', false);
return [value, setValue];
}