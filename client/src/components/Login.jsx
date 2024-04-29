import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);

        const data = {
            email,
            password
        }
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        await response.json()
            .then((data) => {
                if (data.success) {
                    localStorage.setItem('user',data.data);
                    toast.success(`welcome!`, {
                        position: "top-right",
                        autoClose: 1200,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(data)

                    setTimeout(() => {
                        navigate('/',{ state: { username: data } });
                    }, 1205);
                }
                else {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 1200,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(data)
                }
            })
            .catch((err) => {
                console.log("some error has occured in register", err)
                toast.error(`error in registering`, {
                    position: "top-left",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="min-h-screen flex items-center justify-center bg-black/[0.9]">
                <div className="p-6 max-w-sm w-full bg-gray-800 rounded-lg border border-gray-700">
                    <h1 className='text-white text-xl m-2' >Welcome back</h1>
                    <div className="space-y-6">
                        <input
                            type="email"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='mt-4  text-white ' >new user??</span>
                        <Link to={'/register'}> <span className='mt-4  text-blue-400 ' >Register here</span> </Link>
                        <button
                            onClick={handleLogin}
                            className="w-full p-3 bg-red-500 rounded text-white hover:bg-red-600 focus:outline-none focus:ring"
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
