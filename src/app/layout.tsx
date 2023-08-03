import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto ,  Bai_Jamjuree as Baijanjuree, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata: Metadata = {
  title: 'MobiTrans',
  description: 'Controle de viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-800`} >
            {children}
        </body>
    </html>
  )
}
