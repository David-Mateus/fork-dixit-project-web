import { Inter } from 'next/font/google'
import Home from '../components/HomePage/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <Home />
  )
}
