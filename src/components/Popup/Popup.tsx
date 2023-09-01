import React, {Dispatch, FC, SetStateAction} from 'react';
import s from './Popup.module.css'
import Button from "../../UI/Button/Button";

interface PopupProps {
    callBack: Dispatch<SetStateAction<boolean>>
}

const Popup: FC<PopupProps> = ({callBack}) => {

    return (
        <div className={s.overlay} onClick={() => callBack(false)}>
            <div className={s.popup}>
                <h3 className={s.title}>metamask extension</h3>
                <p className={s.text}>
                    To work with our application, you have to install the <a target={"_blank"}
                                                                             href="https://metamask.io/download/"
                                                                             className={s.link}>Metamask browser
                    extension</a>
                </p>

                <Button onClick={() => callBack(false)}>Skip this step</Button>
            </div>
        </div>
    );
};

export default Popup;