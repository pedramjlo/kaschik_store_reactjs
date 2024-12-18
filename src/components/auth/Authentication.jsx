import React, { useState } from 'react';
import axios from 'axios';

import Header from '../header/Header';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationality, setNationality] = useState('iranian');
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

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', { email, password, firstName, lastName, nationality, nationalIDNumber, passportNumber });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className=''>

            <Header />

            <div className='flex flex-col gap-36 bg-custom-beige py-5 text-left'>

                <div className='py-5 flex flex-col gap-5 '>
                <h2 className='pl-5 pt-10 text-2xl font-bold'>Login</h2>
                    <form onSubmit={handleLogin} className='flex flex-col items-center gap-4'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        
                        <button type="submit" className="p-2 auth-form-fields bg-black text-white auth-form-buttons">Login</button>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <a href="#" className='pl-5 text-sm font-medium text-left'>forgot your password?</a>
                </div>




                <div className='flex flex-col gap-5 '>

                    <h2 className='pl-5 pt-10 text-2xl font-bold'>Create an account</h2>

                    <div className='flex flex-col justify-left gap-5 px-5 text-xs font-semibold'>
                        <p>We never save credit card information.</p>
                        <p>
                        Registering makes checkout fast and easy and saves your order information in your account.
                        </p>
                    </div>

                    <form onSubmit={handleRegistration} className='flex flex-col items-center gap-4'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First name"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last name"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        <select
                            name="nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            className="p-2 border auth-form-fields"
                            required
                        >
                            <option value="iranian">Iranian</option>
                            <option value="foreigner">Non-Iranian</option>
                        </select>

                        {nationality === 'iranian' ? (
                            <input
                                type="number"
                                value={nationalIDNumber}
                                onChange={(e) => setNationalIDNumber(e.target.value)}
                                placeholder="National ID number"
                                className="p-2 border auth-form-fields"
                                required
                            />
                        ) : (
                            <input
                                type="text"
                                value={passportNumber}
                                onChange={(e) => setPassportNumber(e.target.value)}
                                placeholder="Passport number"
                                className="p-2 border auth-form-fields"
                                required
                            />
                        )}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="p-2 border auth-form-fields"
                            required
                        />
                        <div className='pl-5 flex items-center gap-3'> 
                        <input type="checkbox" required />
                        <span className='text-sm'>I agree with Kaschik's term and conditions</span>

                        </div>
                        <button type="submit" className="p-2 auth-form-fields bg-black text-white auth-form-buttons">Register</button>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                </div>


            </div>    
        </div>
    );
};

export default Authentication;
