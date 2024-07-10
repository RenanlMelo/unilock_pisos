import Link from 'next/link'
import React from 'react'

export const Header = () => {

  const navbarItems = [
    { name: 'Serviços', id: 'servicos' },
    { name: 'Modelos', id: 'modelos' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Contato', id: 'contato' },
  ]

  return (
    <header className='flex justify-between items-center'>
      <h1>Unilock Pisos</h1>
      <nav>
        {navbarItems.map((item, index) => (
          <Link />
        )
        )}
      </nav>
    </header>
  )
}
