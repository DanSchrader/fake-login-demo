import Image from "next/image";
import Form from "next/form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export default function Password() {
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
        <p className="font-bold">test@mailaddress.de</p>
        <h1 className="font-sans font-bold text-[28px]">Kennwort eingeben</h1>
        <Form action="" className="w-full">
          <div className="flex flex-row">
            <input
              type="password"
              id="userInput"
              name="userInput"
              className="block w-full min-w-[350px] py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Passwort"
            />
            <button className="ml-4 text-gray-700">
              <RiEyeOffFill />
            </button>
          </div>
        </Form>
        <p><a href="" className="text-blue-500">Passwort vergessen?</a></p>
        <div className="self-end">
          <button className="bg-blue-500 text-white px-10 py-2">Weiter</button>
        </div>
        
      </main>
      
    </div>
    </div>
  )
};