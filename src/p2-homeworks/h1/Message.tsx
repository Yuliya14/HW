import React, {useState} from 'react'
import classes from './Message.module.css'
type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: messageType) {

    return (
        <div >
            <div className={classes.message}>
                <img className={classes.img} src={props.avatar} alt=""/>
                <div className={classes.angle}></div>
                <div className={classes.content}>
                    <h4 className={classes.name}>{ props.name }</h4>
                    <h3 className={classes.text}>{props.message}</h3>
                    <h6 className={classes.time}> {props.time}</h6>
                </div>
            </div>

        </div>
    )
}

export default Message
