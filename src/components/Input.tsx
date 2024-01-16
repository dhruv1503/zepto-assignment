import { FC } from "react"

interface InputProps{
    placeholder: string
}

export const Input : FC<InputProps> = ({placeholder}) => {
    return <input placeholder={placeholder}></input>
} 