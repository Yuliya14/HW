import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}
export type UsersType = Array<UserType>

const initialPeople: UsersType = [
    {_id: 0, name: 'Кот ', age: 3},
    {_id: 1, name: 'Александр ', age: 66},
    {_id: 2, name: 'Коля ', age: 16},
    {_id: 3, name: 'Виктор ', age: 44},
    {_id: 4, name: 'Дмитрий ', age: 40},
    {_id: 5, name: 'Ирина ', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={
            {
                display: "grid",
                gridTemplateColumns: "1.7fr 0.7fr 10fr",
                gridAutoRows: "30px"
            }}>
            <div style={{border: "2px solid lightcoral"}}>{p.name}</div>
            <div style={{border: "2px solid lightcoral"}}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 'check'}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={check}>check 18</SuperButton>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
