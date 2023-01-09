import React from 'react'
import Header from '../Header/Header';
import ServicesJSON from './ServicesJSON/01MainJSON.json'
const Services = () => {
  return (
    <div><Header />
      <table>


        {
          ServicesJSON.map((obj) => {
            return (
              <tr className='text-center'  >

                <td className='w-1/4'>{obj.sname}</td>
                <td className='w-1/4'> {obj.category}</td>
                <td>{obj.mprice}</td>
                <td>{obj.nmprice}</td>


              </tr>

            )
          }
          )

        }</table>
    </div>
  )
}

export default Services



