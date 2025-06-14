import React from 'react'
import { Table } from '@contentful/f36-components';
import { Link } from 'react-router-dom'



function Cleaning() {
  const contentTypes = [
    {
      id: '1',
      name: 'Residential',
      type: 'Apartment/Townhome/House',
      description:
        'Let us take care of your home, we treat it like its our own, with love, respect, and care. We make sure to use proper products for all surface types (i.e. stainless steel and wood).',
    },
    {
      id: '2',
      name: 'Commercial',
      type: 'Business Buildings/Leased out offices/ Realty companies',
      description:
        'Have a business and need it cleaned for your employees/Clients? We are here to offer you a easy solution for your business to be taken care of on a daily basis or what ever schedule you would like. Its our job to maintain a clean and professional environment, so all you have to do is focus on your business.',
    },
    {
      id: '3',
      name: 'Construction',
      type: 'Work with Construction companies',
      description:
        'We work with construction companies so all they have to do is the project at hand, we take care of the work environment to maintain a safe work space for employees and to contribute to a faster and seamless project.',
    },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Cleaning</h1>
      <Table>
        <Table.Head >
          <Table.Row>
            <Table.Cell>Service</Table.Cell>
            <Table.Cell>Type</Table.Cell>
            <Table.Cell>Description</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {contentTypes.map((service) => (
            <Table.Row key={service.id}>
              <Table.Cell>{service.name}</Table.Cell>
              <Table.Cell>{service.type}</Table.Cell>
              <Table.Cell>{service.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className='mt-8 '>
        <Link
          to="/contact-me"
        >
          <button className="block w-full text-center px-4 py-3 bg-green-600 text-white rounded font-semibold transition">
            Click here to book !
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cleaning