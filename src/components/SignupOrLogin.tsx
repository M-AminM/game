import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";

type UserSubmitForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};
type Props = {
    isLogin: boolean;
    setInfo: (active: string) => void;
};

const SignupOrLogin = ({isLogin, setInfo}: Props) => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(14, 'Username must not exceed 14 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password must not exceed 20 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const [user , setUser] = useState<any[]>([]);

    const getUser = () => {
        axios.get('http://localhost:8000/users').then( (response) => {
            setUser(response.data);
        }).catch((err) => {})
    }

    const addUser = (name: string, password: string, email: string) => {
        const data: any ={name: name, password: password, email: email};
        axios.post('http://localhost:8000/users', data).then(() => {
            getUser();
        }).catch((err) => {})
    }

    useEffect(() => {
        getUser()
    }, []);

    const onSubmit = (data: UserSubmitForm) => {
        const a1: string[] = user.map((a) => a.name);
        const a2: string[] = user.map((a) => a.password);
        const a3: string[] = user.map((a) => a.email);
        for(let i = 0; i < user.length; i++){
            if(a1[i] === data.username && a2[i] === data.password && a3[i] === data.email){
                isLogin = true;
            }
        }
        console.log(isLogin);
        if(isLogin) {
            alert('successful');
        }else{
            alert('you create a new account');
            addUser(data.username, data.password, data.email);
        }
        setInfo(data.username);
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        {...register('username')}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword')}
                        className={`form-control ${
                            errors.confirmPassword ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
                    </div>
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        {...register('acceptTerms')}
                        className={`form-check-input ${
                            errors.acceptTerms ? 'is-invalid' : ''
                        }`}
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                        I have read and agree to the Terms
                    </label>
                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="btn btn-warning float-right"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupOrLogin