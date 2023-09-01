import React, {useEffect} from 'react';
import s from "./Registration.module.css";
import {useEthers} from "@usedapp/core";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Form, Formik} from "formik";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import * as Yup from 'yup';
import {createUser} from "../../store/reducers/UserSlice";

const Registration = () => {
    const validationSchema = Yup.object().shape({
        nameInput: Yup.string().required('Field "name" is empty'),
        emailInput: Yup.string().required('Field "email" is empty').email('Incorrect email')
    })
    const {activateBrowserWallet, account, isLoading} = useEthers()
    const {email, username} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Beta test registration</h2>
            <div className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <Formik initialValues={{nameInput: "", emailInput: ""}}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={(values, {resetForm}) => {
                        if (account) {
                            dispatch(createUser({
                                address: account,
                                username: values.nameInput,
                                email: values.emailInput,
                                id: account
                            }))
                            resetForm()
                        } else {
                            activateBrowserWallet()
                        }
                    }}>
                {({values, errors, handleChange}) => (<Form noValidate>
                    <div className={s.inputBlock}>
                        <label htmlFor="name" className={s.label}>Name</label>
                        {username
                            ? <span className={s.info}>{username}</span>
                            :
                            <>
                                <Input id={'name'} type="text" name={'nameInput'} onChange={handleChange}
                                       value={values.nameInput}>
                                    We will display your name in participation list</Input>
                                {errors && <p className={s.error}>{errors.nameInput}</p>}
                            </>

                        }
                    </div>
                    <div className={s.inputBlock}>
                        <label htmlFor="email" className={s.label}>Email</label>
                        {email
                            ? <span className={s.info}>{email}</span>
                            :
                            <>
                                <Input id={'email'} type="email" name={'emailInput'} onChange={handleChange}
                                       value={values.emailInput}>
                                    We will display your email in participation list</Input>
                                {errors && <p className={s.error}>{errors.emailInput}</p>}
                            </>
                        }
                    </div>
                    {!username ? <Button type={'submit'}>Get early access</Button> :
                        <Button disabled>Get early access</Button>}
                </Form>)}


            </Formik>
        </div>
    );
};

export default Registration;