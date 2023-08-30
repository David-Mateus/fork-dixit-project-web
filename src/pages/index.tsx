import { Inter } from 'next/font/google'
import Home from '../components/HomePage/Home.tsx'


const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <Home/>
    
  )
}
