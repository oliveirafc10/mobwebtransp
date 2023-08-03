'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from './Input'
import { FormEvent } from 'react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'


const schema = z.object({
  nota: z.string(),
  peso: z.string(),
  origem: z.string(),
  destino: z.string(),
  caminhao: z.string(),
  valor: z.string(),
  observacao: z.string()
})

type DataProps = z.infer<typeof schema>

export function NewTripsForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  async function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    await api.post('/trips', {
      nota: formData.get('nota'),
      peso: formData.get('peso'),
      origem: formData.get('origem'),
      destino: formData.get('destino'),
      caminhao: formData.get('caminhao'),
      valor: formData.get('valor'),
      observacao: formData.get('observacao'),

    }),
    router.push('/')
  }

  return (
    <form onSubmit={handleCreateTrip} 
          className=" flex flex-1 flex-row gap-2 justify-center ">
      <div className="mt-10 flex flex-col space-y-14 text-sm leading-relaxed items-center" >
        <div className="space-y-6">
          <p className="font-Roboto_700Bold text-2xl leading-relaxed text-gray-50 ">
            Cadastro de Notas
          </p>
         </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='space-y-6'>
          <div className='flex flex-row items-center justify-between text-lg w-80'>
            <Input 
              {...register('nota')} 
              placeholder='Nota' 
              
              type="text" 
              label='Nota'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('peso')} 
              placeholder='Peso' 
              type="text" 
              label='Peso'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('origem')} 
              placeholder='Origem' 
              type="text" 
              label='Origem'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('destino')} 
              placeholder='Destino' 
              type="text" 
              label='Destino'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('caminhao')} 
              placeholder='Caminhão' 
              type="text" 
              label='Caminhão'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('valor')} 
              placeholder='Valor a pagar' 
              type="number" 
              label='Valor'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          <div className='flex flex-row items-center text-lg justify-between'>
            <Input 
              {...register('observacao')} 
              placeholder='Observação' 
              type="text" 
              label='Obs.'
              className='text-lg text-gray-900 bg-gray-50 rounded-xl'/>
          </div>
          </div>
          <div>
            <button 
              type='submit'
              className='bg-green-500 rounded-lg w-36 h-10 text-gray-950 mt-16 text-lg'
              >
                Salvar
              </button>
          </div>
          
        </div>
        <div>
   
        </div>
        <div>
        </div>
      
      </div>
    </form>
  )
}
