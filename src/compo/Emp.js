import React from 'react'

export const Emp = (props) => {
  return (
    <tr>
        <td>{props.fname}</td>
        <td>{props.lname}</td>
        <td>{props.gender}</td>
        <td>{props.bod}</td>
        <td>{props.dept}</td>
        <td>{props.role}</td>
        <td>{props.email}</td>
        <td>{props.contact}</td>
        <td>{props.doj}</td>
        <td>{props.Refrence}</td>
        <td>{props.empid}</td>
        <td>{props.edu}</td>
        <td>{props.add}</td>
        <td>{props.delete}</td>
        <td>{props.update}</td>
    </tr>
  )
}

