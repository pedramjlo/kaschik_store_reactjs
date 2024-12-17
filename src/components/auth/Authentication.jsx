import React, { useState } from 'react';
import axios from 'axios';

import Header from '../header/Header';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nationality, setNationality] = useState('');
    const [nationalIDNumber, setNationalIDNumber] = useState('');
    const [passportNumber, setPassportNumber] = useState('');

    const [error, setError] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', { email, password });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    const handleRegistraion= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', { email, password, firstName, lastName, phoneNumber, nationality, nationalIDNumber, passportNumber });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <Header />
            
            <div className='flex flex-col gap-5 h-screen bg-custom-beige'>
                <h2 className='pl-7 pt-10 text-left text-xl font-bold'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col items-center gap-4'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-2 border  w-10/12"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 border  w-10/12"
                        required
                    />
                    <button type="submit" className="p-2 w-10/12 bg-black text-white ">login</button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>



            <div className='flex flex-col gap-5 h-screen bg-custom-beige'>
                <h2 className='pl-7 pt-10 text-left text-xl font-bold'>Create an account</h2>
                <form onSubmit={handleRegistraion} className='flex flex-col items-center gap-4'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-2 border  w-10/12"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 border  w-10/12"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 border  w-10/12"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 border  w-10/12"
                        required
                    />
                    
                    <button type="submit" className="p-2 w-10/12 bg-black text-white ">login</button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>



        </div>
    );
};

export default Authentication;
