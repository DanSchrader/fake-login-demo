import Image from "next/image";

export default function Warnung() {
  return (
    <div 
      className="h-screen bg-cover bg-center" 
      style={{backgroundImage: "url('/microsoft-login-background.jpg')"}}>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
        <main className="flex flex-col max-w-[33vw] gap-8 row-start-2 items-start p-12 bg-black shadow-lg">
            <Image
            src="/shiftavenue-logo.svg"
            alt="shiftavenue logo"
            width={130}
            height={30}
            priority
            />
            <h1 className="font-sans font-bold text-[28px] text-white">Warnung!</h1>
            <p className="font-sans text-[18px] text-white">Geben Sie niemals Passwörter ein, wenn der Link in der Mail, dem QR-Code o.ä. nicht klar identifizierbar ist.</p>
        </main>
      
    </div>
    </div>
  );
}
