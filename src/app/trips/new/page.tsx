import { NewTripsForm } from '@/components/NewTripsForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import Image from 'next/image'
import logo from '@/app/assets/logo.svg'



export default function NewTrips() {
  return (
    <main className="flex flex-col min-h-screen mt-5">
    <div className='absolute bottom-0 right-0 top-0 w-2 bg-stripes'/>
      <div className='flex flex-row justify-center '>
        <Link
          href="/"
          className="mr-8 flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar à timeline
        </Link>
        <Image src={logo} alt="Logo" />
        </div>
      <NewTripsForm />
  </main>
  )
}