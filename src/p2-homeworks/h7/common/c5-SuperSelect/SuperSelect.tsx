import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import './select.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options?.map((option, index) => (<option key={index} className={'option'} value = {option}>{option}</option>)); // map options with key
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

    return (
        <select className = {'select'} onChange={onChangeCallback}  {...restProps}>
           {mappedOptions}
        </select>
    )
}

export default SuperSelect
