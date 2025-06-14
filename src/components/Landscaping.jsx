import React from 'react'
import { Table } from '@contentful/f36-components';
import { Link } from 'react-router-dom'


function Landscaping() {
  const contentTypes = [
    {
      id: '1',
      name: 'Residential',
      type: 'Townhome/House',
      description:
        'We offer landscaping for clients that need their lawn mowed, bushes hedged, and weed eating. Also edging of curb and driveway to leave a clean look We can cut off simple tree limbs that you wish to have removed as well',
    },
    {
      id: '2',
      name: 'Commercial',
      type: 'Property management companies/Realty companies',
      description:
        'If you have either a business building or home you are flipping for your realty company, we are here to add value to the property, by maintaining the initial view of your assets, to look perfect for incoming clients/potential customers',
    }
  ];
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Landscaping</h1>
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

export default Landscaping