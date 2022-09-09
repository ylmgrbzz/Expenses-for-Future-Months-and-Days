import React from 'react'
import Loop from './Loop';

function Table(props) {
console.log(props)
  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Aylık Gün Sayısı</th>
        <th scope="col" className="	bg-warning">Günlük Hesaplama</th>
        <th scope="col" className="bg-danger">Aylık Hesaplama</th>
      </tr>
    </thead>
    <tbody>
    {/*
      arrr.arrr.map((key, item)=>
       // <Loop item={item} key={key}/>
console.log(item,key)
(<tr>
<th scope="row">{item.gunSayisi2}</th>
<td>31</td>
<td className="bg-warning">{item.gunlukTaksitTutari2}</td>
<td className="bg-danger">ss</td>
</tr>)
      )
    */}
      
    </tbody>
  </table>
  )
}
export default Table;