import { EmptyTrips } from "@/components/EmptyTrips";
import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

dayjs.locale(ptBr)

interface Trip {
  id: string
  nota: string
  peso: string
  origem: string
  destino: string
  caminhao: string
  valor: string
  observacao: string
  createdAd: string
}

export default async function Trips() {
  const response = await api.get('/trips')

  const trips: Trip[] = response.data

  if (trips.length === 0) {
    return <EmptyTrips />
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between w-96">
        <Link href={'/'} className=" flex gap-2 text-sm text-green-500 hover:text-gray-100 justify-end mt-3">
          <ArrowLeft className="w-4 h-4 text-green-600" />
        Voltar
        </Link>
        <Link href={'/trips/new'} className=" flex gap-2 text-sm text-green-500 hover:text-gray-100 justify-end mt-3">
          <Plus className="w-4 h-4 text-green-600" />
        Nova
        </Link>
      </div>      
      {trips.map(trip => {
        return (          
          <div key={trip.id}>              
            <time 
              className="items-center flex gap-2 text-sm text-gray-50 text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(trip.createdAd).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <div className="flex flex-row w-96 justify-between bg-gray-500 rounded-lg">
              <div className="flex flex-row">
                <p className="ml-1 mr-2 text-base leading-relaxed text-gray-100">Nf</p>
                <p className="text-base leading-relaxed text-green-500">{trip.nota}</p>
              </div>
              <div className="flex flex-row ">
                <p className="mr-2 text-base leading-relaxed text-gray-100">Peso</p>
                <p className="text-base leading-relaxed text-green-500">{trip.peso}</p>
              </div>
              <div className="flex flex-row">
                <p className="mr-1 text-base leading-relaxed text-gray-100">R$</p>
                <p className="mr-1 text-base leading-relaxed text-green-500">{trip.valor}</p>
              </div>
            </div>
            <div className="flex flex-row w-96 justify-between bg-gray-500 rounded-lg">
              <div className="flex flex-row ">
                <p className="ml-1 mr-2 text-base leading-relaxed text-gray-100">Org.</p>
                <p className="text-base leading-relaxed text-green-500">{trip.origem}</p>
              </div>
              <div className="flex flex-row ">
                <p className="mr-2 text-base leading-relaxed text-gray-100">Des.</p>
                <p className="mr-1 text-base leading-relaxed text-green-500">{trip.destino}</p>
              </div>
              
            </div>

          </div>
        )
      })}
    </div>
  )
}