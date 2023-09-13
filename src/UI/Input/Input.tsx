import React, {FC, InputHTMLAttributes} from 'react';
import s from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string;
}

const Input: FC<InputProps> = ({children, ...props}) => {
    return (
        <input  className={s.input} placeholder={children} {...props}/>
    );
};

export default Input;