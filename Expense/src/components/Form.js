import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Form({ policy, setPolicy }) {

  return (
    <div>
      <select
        className="form-select my-3"
        aria-label="Default select example"
        onChange={(e) => {
          setPolicy({ ...policy, expense: e.target.value });
        }}
      >
        <option value="Gidertipi">Gider tipi seçiniz</option>
        <option value="Sigorta">Sigorta</option>
        <option value="Kasko">Kasko</option>
        <option value="Kira">Kira</option>
      </select>
      <div className="row mb-3 my-3 ">
        <div className="col ">
          <input
            value={policy.name}
            onChange={(e) => {
              setPolicy({ ...policy, name: e.target.value });
            }}
            name="name1"

            type="text"
            className="form-control"
            placeholder="Ad"
          />
        </div>
        <div className="col">
          <input
            value={policy.surname}
            onChange={(e) => {
              setPolicy({ ...policy, surname: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Soyad"
          />
        </div>
      </div>
      <div className="form-outline my-3 ">
        <input
          value={policy.documentNo}
          onChange={(e) => {
            setPolicy({ ...policy, documentNo: e.target.value });
          }}
          type="number"
          id="typeNumber"
          className="form-control"
          placeholder="Belge Numarası"
        />
        <label className="form-label" htmlFor="typeNumber"></label>
      </div>
      <div className="form-outline my-3">
        <input
          value={policy.policyNo}
          onChange={(e) => {
            setPolicy({ ...policy, policyNo: e.target.value });
          }}
          type="number"
          id="typeNumber"
          className="form-control"
          placeholder="Poliçe/Sözleşme No"
        />
      </div>

      <div className=" form-group">
        {/*<label for="date" className=" col-form-label"></label>*/}
        <div>
          <div className="input-group date" id="datepicker2">
            <DatePicker
              className="form-control"
              selected={policy.policyBegin}
              onChange={(date) => setPolicy({ ...policy, policyBegin: date })}
              placeholderText={"Police Başlangıç Tarihi"}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              showYearDropdown
              scrollableYearDropdown
            />
          </div>
        </div>
      </div>

      <div className=" form-group">
        {/*<label for="date" className=" col-form-label"></label>*/}
        <div>
          <div className="input-group date" id="datepicker2">
            <DatePicker
              className="form-control"
              selected={policy.policyFinish}
              onChange={(date) => setPolicy({ ...policy, policyFinish: date })}
              placeholderText={"Police Bitiş Tarihi"}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              showYearDropdown
              scrollableYearDropdown
            />
          </div>
        </div>
      </div>
      <div className="form-outline ">
        <input
          value={policy.policyPrice}
          onChange={(e) => {
            setPolicy({ ...policy, policyPrice: e.target.value });
          }}
          type="number"
          id="typeNumber"
          className="form-control"
          placeholder="Poliçe Fiyatı"
        />
        <label className="form-label" htmlFor="typeNumber"></label>
      </div>
      {/* <div className="form-outline ">
        <input
          value={policy.installmentNumber}
          onChange={(e) => {
            setPolicy({ ...policy, installmentNumber: e.target.value });
          }}
          type="number"
          id="typeNumber"
          className="form-control my-3"
          placeholder="Taksit Sayısı"
        />
        <label className="form-label" htmlFor="typeNumber"></label>
      </div> */}

      <div className="form-group my-3">
        <label for="comment">Açıklama:</label>
        <textarea
          value={policy.description}
          onChange={(e) => {
            setPolicy({ ...policy, description: e.target.value });
          }}
          className="form-control"
          rows="5"
          id="comment"
        ></textarea>
      </div>

      <select
        className="form-select "
        aria-label="Default select example"
        onChange={(e) => {
          setPolicy({ ...policy, calculationMethod: e.target.value });
        }}
      >
        <option value={"Hesaplama"}>Hesaplama Yöntemi</option>
        <option value="Gunluk">Günlük</option>
        <option value="Aylık">Aylık</option>
      </select>

    </div>
  );
}
export default Form;
