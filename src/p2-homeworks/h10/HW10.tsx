import React, {useReducer, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import styles from "./HW10.module.css"

function HW10() {
    let dispatch = useDispatch()
    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))},
            2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={styles.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
