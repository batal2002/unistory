import React, {FC} from 'react';
import s from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button: FC<ButtonProps> = ({children,  ...props}) => {
    return (
        <button className={s.btn} {...props} >
            {children}
        </button>
    );
};

export default Button;