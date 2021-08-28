import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.Input

    return (
        <span>
            <input value={name} onChange={setNameCallback} className={`${inputClass}`}  onBlur = {setNameCallback} onKeyPress={onKeyPressHandler}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div className = {s.errorText}>{error}</div>
        </span>
    )
}

export default Greeting
