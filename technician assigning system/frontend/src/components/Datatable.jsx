import React from 'react'

const Datatable = ({data}) => {

  return <>
  <table className='table table-dark'>
    <tr>
      <th>#</th>
      <th>Zone</th>
      <th>Status</th>
    </tr>
    {
      data.map((x,idx)=>(
        <tr>
          <td>{idx+1}</td>
          <td>{x.title}</td>
          <td>{x.status}</td>
        </tr>
      ))
    }


  </table>
  
  </>
}

export default Datatable