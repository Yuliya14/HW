import React, {MouseEvent} from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
                {props.affair.name}
                {props.affair.priority}
        </div>
    )
}

export default Affair
