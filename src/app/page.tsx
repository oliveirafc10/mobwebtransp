import { Copyrigth } from "@/components/Copyrigth";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
      <main className="flex flex-col min-h-screen justify-between items-center">
        <div className=' absolute bottom-0 right-0 top-0 w-2 bg-stripes'/>
        {/*Corpo*/}
        <Hero />
        {/* rodapé*/}
        <Copyrigth />
      </main>
  
  
  )
}
