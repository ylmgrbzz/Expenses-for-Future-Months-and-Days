import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './Form';
import Table from './Table';

function Expense() {
  const [policy, setPolicy] = useState({
    expense: null,
    name: null,
    surname: null,
    documentNo: null,
    policyNo: null,
    policyBegin: null,
    policyFinish: null,
    policyPrice: null,
    // installmentNumber: null,
    description: null,
    calculationMethod: null,

  });
  const arrr = []
  function randomNumberInRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function policyFunc(e) {

    e.preventDefault(); // sayfanın refresh olmasını engelledim.

    // await axios.post("http://localhost:5000/form", policy).then(response => alert(response));
    //console.log(policy)

    setPolicy({ documentNo: randomNumberInRange(1000000, 9999999) });
    // console.log(policy);

    if (policy.calculationMethod == "Gunluk") {

      gunlukUcretHesapla();
    }
    if (policy.calculationMethod == "Aylık") {

      aylıktarih();
      aylıkhesapla();
    }

  }

  function gunlukTarihHesapla() {
    var tarih1 = policy.policyBegin;
    var tarih2 = policy.policyFinish;
    //iki tarih arasındaki saat farkını hesaplamak için aşağıdaki yöntemi kullanabiliriz.
    var zamanFark = Math.abs(tarih2.getTime() - tarih1.getTime());

    //zamanFark değişkeni ile elde edilen saati güne çevirmek için aşağıdaki yöntem kullanılabilir.
    var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24));
    // console.log(gunFark)

    return gunFark;

  }

  function aylıktarih() {
    var tarih1 = policy.policyBegin;
    var tarih2 = policy.policyFinish;
    //iki tarih arasındaki saat farkını hesaplamak için aşağıdaki yöntemi kullanabiliriz.
    var zamanFark = Math.abs(tarih2.getTime() - tarih1.getTime());

    //zamanFark değişkeni ile elde edilen saati güne çevirmek için aşağıdaki yöntem kullanılabilir.
    var aySayisi = Math.ceil(zamanFark / (1000 * 3600 * 720));

    return aySayisi;
  }

  function aylıkhesapla() {
    const aySayisi = aylıktarih()
    var aylikTaksitTutari = (policy.policyPrice) / aySayisi;
    // console.log(aylikTaksitTutari);
  }

  async function gunlukUcretHesapla() {
    let gunSayisi = gunlukTarihHesapla()
    var gunlukTaksitTutari = (policy.policyPrice ) / gunSayisi;
    for (let i = 1; i <= gunSayisi; i++) {
      await arrr.push({ gunSayisi2: i, gunlukTaksitTutari2: gunlukTaksitTutari })

    }
    console.log(arrr)

    var tbodyRef = document.querySelector('#hesaplama tbody')

    arrr.forEach((data) => {
      // console.log(data['gunSayisi2'])

      // Insert a row at the end of table
      var newRow = tbodyRef.insertRow()

      // Insert a cell at the end of the row
      var newCell = newRow.insertCell()

      // Append a text node to the cell
      var newText = document.createTextNode(data['gunSayisi2'])
      newCell.appendChild(newText)

      // Insert a cell at the end of the row
      var newCell = newRow.insertCell()

      // Append a text node to the cell
      var newText = document.createTextNode(data['gunlukTaksitTutari2'])
      newCell.appendChild(newText)

    })
  }

  async function aylıkhesapla() {
    let aySayisi = aylıktarih()
    var aylikTaksitTutari = (policy.policyPrice) / aySayisi;
    //var hesap2=(aylikTaksitTutari*policy.installmentNumber)

    for (let i = 1; i <= aySayisi; i++) {
      await arrr.push({ aySayisi2: i, aylikTaksitTutari2: aylikTaksitTutari })
    }
    console.log(arrr)

    var tbodyRef = document.querySelector('#hesaplama2 tbody')
    arrr.forEach((data) => {
      // console.log(data['aySayisi2'])

      // Insert a row at the end of table
      var newRow = tbodyRef.insertRow()

      // Insert a cell at the end of the row
      var newCell = newRow.insertCell()

      // Append a text node to the cell
      var newText = document.createTextNode(data['aySayisi2'])
      //var newText = document.createTextNode(data['policy.installmentNumber'])
      newCell.appendChild(newText)

      // Insert a cell at the end of the row
      var newCell = newRow.insertCell()

      // Append a text node to the cell

      // var newText = document.createTextNode((data['aylikTaksitTutari2'])*policy.installmentNumber)
      var newText = document.createTextNode(data['aylikTaksitTutari2'])

      newCell.appendChild(newText)

    })

  }

  for (let i = 0; i < 10; i++) {
    // console.log(i)
  }
  arrr.forEach((data) => {
    // console.log(data['gunSayisi2'])

  })

  return (
    <div className="container ">

      <form type="form" onSubmit={policyFunc}>
        <Form policy={policy} setPolicy={setPolicy} />
        <div className="row m-auto">
          <button className="btn btn-success my-3" type="onSubmit">
            Hesapla
          </button>
        </div>
      </form>

      {
      }

      <table className="table table-bordered" id="hesaplama">
        <thead>
          <tr>
            {/* <th scope="col"></th> */}
            <th scope="col-6"> Gün Sayısı</th>
            <th scope="col-6" className="	bg-info">Günlük Hesaplama Ücreti</th>
          </tr>
        </thead>
        <tbody>
          {

          }

        </tbody>
      </table>

      <table className="table table-bordered" id="hesaplama2">
        <thead>
          <tr>
            {/* <th scope="col"></th> */}
            <th scope="col-6"> Ay Sayısı</th>
            <th scope="col-6" className="	bg-info">Aylık Hesaplama Ücreti</th>

          </tr>
        </thead>
        <tbody>
          {
          }

        </tbody>
      </table>
    </div>

  )
}
export default Expense;