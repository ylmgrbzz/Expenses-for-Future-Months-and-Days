import React from 'react'

function Loop({ item, key }) {
  console.log(item, key)

  return (
    <tr>
      <th scope="row">{item.gunSayisi2}</th>
      <td>31</td>
      <td className="bg-warning">{item.gunlukTaksitTutari2}</td>
      <td className="bg-danger">ss</td>
    </tr>
  )
}

export default Loop
