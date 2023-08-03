import Image from 'next/image'
import nlwLogo from '@/app/assets/logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="mt-28 flex flex-col items-center justify-between space-y-5 mr-0 ml-0">
      
      <Image src={nlwLogo} alt="Logo nlw" />
      <div className="space-y-10">
        <h1 className="mt-20 text-center text-xl font-bold leading-tight text-gray-50">
          Controle de Viagens e Combustível
        </h1>
        <p className="text-md text-center leading-relaxed p-12">
          Bem-vindo ao aplicativo de Controle de Viagens e Combustível. - A
          ferramenta definitiva para simplificar e otimizar suas experiências de
          viagem
        </p>
      </div>
      <div className="mt-28 space-y-10">
        <Link
          className="mr-4 inline-block rounded-full bg-green-500 px-3 py-2 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          href="/trips"
        >
          Viagens
        </Link>
        <Link
          className="ml-4 inline-block rounded-full bg-green-500 px-3 py-2 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          href="/memories/new"
        >
          Combustíveis
        </Link>
      </div>
    </div>
  )
}
