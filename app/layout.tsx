
import './globals.css'
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/Navbar';


import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'AirBnb',
  description: 'Destinations all in one place',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28 '>
          {children}
        </div>
      </body>
    </html>
  )
}
