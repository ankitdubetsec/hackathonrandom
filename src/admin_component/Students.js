import React from 'react'

export default function Students()  {
  return (
    <div>
      <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Courses</th>
                <th>Scholarship Type</th>
                <th>GPA</th>
                <th>Contact</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dom</td>
                <td></td>
                <td>Economic</td>
                <td>9</td>
                <td>1234567890</td>
                <td class="accept"><a className='button'>Accepted</a></td>
            </tr>
            {/* <tr class="active-row"> */}
            <tr>
                <td>Melissa</td>
                <td></td>
                <td>Merit</td>
                <td>8</td>
                <td>0987654321</td>
                <td class="reject"><a className='button'>Rejected</a></td>
            </tr>
            <tr>
                <td>John</td>
                <td></td>
                <td>Merit</td>
                <td>6</td>
                <td>0246813579</td>
                <td class="pending"><a className='button'>Pending</a></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}
