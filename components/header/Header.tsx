import Link from 'next/link'
import React from 'react'

export const Header = () => {

  const navbarItems = [
    { name: 'Serviços', id: 'servicos' },
    { name: 'Modelos', id: 'modelos' },
    { name: 'Sobre', id: 'sobre' },
  ]

  return (
    <header className='grid grid-cols-4 justify-between items-center px-[3vw] py-[2vh] fixed w-full shadow-[0_5px_15px_#00000070] bg-[#e0e0f0]'>
      <h1>Unilock Pisos</h1>
      <nav className='flex justify-center items-center gap-x-6 col-start-2 col-span-2'>
        {navbarItems.map((item, index) => (
          <Link href="/sobre" >{item.name}</Link>
        )
        )}
      </nav>
      <span className='text-right text-[#eee] bg-[#c53c37] shadow-[1px_2px_5px_#00000060] hover:shadow-[2px_3px_5px_#00000080] w-fit place-self-end px-4 py-2 rounded-3xl hover:bg-[#9b3c38] duration-200'>Contato</span>
    </header>
  )
}
