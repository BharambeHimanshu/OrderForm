import React from "react";
import { useState } from "react";
import { onOriginChange , submitForm } from "./OrderFormFunction";

export default function OrderForm() {
  const [inputs, setInputs] = useState({});
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedlocation, setSelectedlocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [uniqueValue, setUniqueValue] = useState("");
  const [noCc, setNoCc] = useState('1');
  const [noCctt, setNoCctt] = useState(0);
  const [ccNumbers, setCcNumbers] = useState({
    cc1: "",
    cc2: "",
    cc3: "",
    cc4: "",
    cc5: "",
  });


  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(inputs)
  };
  console.log(inputs);


  const handleNoCcChange = (e) => {
    setNoCc(e.target.value);
  };
  console.log(noCc);

  const handleNoCcttChange = (e) => {
    setNoCctt(parseInt(e.target.value));
  };
  console.log(noCctt);

  const handleCcNumberChange = (e) => {
    setCcNumbers({
      ...ccNumbers,
      [e.target.name]: e.target.value,
    });
  };
  
  return(
  <>
  <div class="form">
  <div class="form_contain">
    ORDER FORM
  </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origin:</label>
          <select name="Origin" onChange={(e)=> {
            const data = onOriginChange(e.target.value)
            setSelectedlocation(data[1])
            setUniqueValue(data[4])
            setSelectedOrigin(e.target.value)
          }}>
            <option value="">Select an option</option>
            <option value="SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.">SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD">SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD</option>
            <option value="SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.">SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL - NAVA SHEVA- SIEMENS HEALTHCARE PVT LTD">SHPL - NAVA SHEVA- SIEMENS HEALTHCARE PVT LTD</option>
            <option value="SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.">SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD">SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD</option>
            <option value="SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD">SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD</option>
            <option value="SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.">SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.</option>
            <option value="SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD">SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD.</option>
            <option value="SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD">SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD</option>
            <option value="SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.">SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.</option>
            <option value="SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD">SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD</option>
            <option value="Others">Others</option>
        </select>
        </div>
        {selectedOrigin === "Others" && (
          <div>  
      <label>other location</label>
      <input
        type="text"
        name="Location"
        onChange={handleChanges}
        required
      />
      </div>
        )}
        <div>
      <label>Location :</label>
      <input
        type="text"
        name="Location"
        value={selectedlocation}
        required
        disabled
      />
        </div>
      <div>
        <label>unique value </label>
        <input
          style={{ cursor: "no-drop" }}
          type="text"
          name="unique"
          value={uniqueValue}
          required
        />
      </div>
      <div>
        <label>Vehicle Type:</label>
        <select
          name="VehicleType"
          onChange={handleChanges}
          required
        >
          <option value="20 FT ODC">20 FT ODC</option>
          <option value="20FT AIR SUSPENSION">20FT AIR SUSPENSION</option>
          <option value="17ft VEHICLE">17ft VEHICLE</option>
          <option value="PICK UP">PICK UP</option>
          <option value="24 FT PLATFORM">24 FT PLATFORM</option>
          <option value="32 FT PLATFORM">32 FT PLATFORM</option>
          <option value="40 FT TRAILER">40 FT TRAILER</option>
          <option value="20 FT TRAILER">20 FT TRAILER</option>
          <option value="40 FT AIR SUSPENSION">40 FT AIR SUSPENSION</option>
        </select>
      </div>
      <div>
        <label>Transportation Service:</label>
        <select
          name="TransportationService"
          onChange={handleChanges}
          required
        >
          <option value="FTL">FTL</option>
          <option value="PTL">PTL</option>
          <option value="Express">Express</option>
        </select>
      </div>
      <div>
        <label>Pickup Date:</label>
        <input
          style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center" }}
          type="datetime-local"
          name="Pickup_Date"
          onChange={handleChanges}
          required
          className="dark-theme"
        />
      </div>
    <div>
        <label>Expected Target Date:</label>
        <input
          style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center" }}
          type="datetime-local"
          name="expected_Date"
          onChange={handleChanges}
          required
          className="dark-theme"
        />
      </div>
      <div>
        <label>Order By</label>
        <select
          name="OrderBy"
          onChange={handleChanges}
          required
        >
          <option value="Adinath Tajne">Adinath Tajne</option>
          <option value="Aditya Kandharkar">Aditya Kandharkar</option>
          <option value="Chintamani Mayeka">Chintamani Mayeka</option>
          <option value="Jayesh Uniyal">Jayesh Uniyal</option>
          <option value="Sujoy Dey">Sujoy Dey</option>
          <option value="Pravin Katkar">Pravin Katkar</option>
          <option value="Mrirani Das">Mrirani Das</option>
          <option value="Vijay Mahtre">Vijay Mahtre</option>
          <option value="Sagar kadam">Sagar kadam</option>
        </select>
      </div>
      <div>
        <label>S.O Number/PO:</label>
        <input
          type="type"
          name="SOnumber"
          onChange={handleChanges}
          required
        />
      </div>
      <div>
        <label>WBS/COST:</label>
        <input
          type="type"
          name="WBS"
          onChange={handleChanges}
        />
      </div>
      <div>
        <label>Consignee Name</label>
        <input
          type="text"
          name="ConsigneeName"
          onChange={handleChanges}
          required
        />
      </div>
      <div>
        <label>Consignee Address</label>
        <input
          type="text"
          name="ConsigneeAddress"
          onChange={handleChanges}
          required
        />
      </div>
      <div>
      <label>Consignee Pincode</label>
      <input 
        type="text" 
        name="ConsigneePincode"
        onChange={handleChanges}
        required
        />
    </div>
    <div>
      <label>PM Name</label>
      <input 
        type="text" 
        name="PMName"
        onChange={handleChanges}
        required
        />
    </div>
    <div>
      <label>PM Number</label>
      <input 
        type="text" 
        name="PMNumber"
        onChange={handleChanges}
        required
        />
    </div>
    <div>
      <label>Material</label>
      <select name="Material" onChange={handleChanges} required>
        <option value="Cathlar">Cathlar</option>
        <option value="CT">CT</option>
        <option value="LBO">LBO</option>
        <option value="MI">MI</option>
        <option value="RF">RF</option>
        <option value="cios fit">cios fit</option>
        <option value="somatam">somatam</option>
        <option value="Mr/MRI">MR/MRI</option>
        <option value="XP">XP</option>
        <option value="Others">Others</option>
      </select>
      </div>
            <div>
        <label>SHPL instructions</label>
        <input type="text" name="SHPL_instructions" onChange={handleChanges} required />
      </div>
      <div>
        <label>Number of CC</label>
        <select name="no_cc" onChange={handleNoCcChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label htmlFor="noCctt">Number of CC numbers:</label>
        <select name="noCctt" id="noCctt" onChange={handleNoCcttChange}>
          <option value="0">-- Select --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {noCctt >= 1 && (
        <div>
          <label htmlFor="cc1">CC no.1</label>
          <input type="text" name="cc1" id="cc1" onChange={handleCcNumberChange} required />
        </div>
      )}
      {noCctt >= 2 && (
        <div>
          <label htmlFor="cc2">CC no.2</label>
          <input type="text" name="cc2" id="cc2" onChange={handleCcNumberChange} required />
        </div>
      )}
      {noCctt >= 3 && (
        <div>
          <label htmlFor="cc3">CC no.3</label>
          <input type="text" name="cc3" id="cc3" onChange={handleCcNumberChange} required />
        </div>
      )}
      {noCctt >= 4 && (
        <div>
          <label htmlFor="cc4">CC no.4</label>
          <input type="text" name="cc4" id="cc4" onChange={handleCcNumberChange} required />
        </div>
      )}
      {noCctt === 5 && (
        <div>
          <label htmlFor="cc5">CC no.5</label>
          <input type="text" name="cc5" id="cc5" onChange={handleCcNumberChange} required />
        </div>
      )}
      <div>
      <div>
        <div className="submit_button">
          <button type="submit" onChange={setSubmitted}>
            Submit
          </button>
        </div>
      </div>
      {submitted && (
        <div>
          <div className="Tq_msg" style={{ position: "relative" }}>
            <h1>THANK YOU</h1>
          </div>
          <div className="celebration" style={{ position: "absolute" }}>
            <svg width="600" height="90" viewBox="0 0 600 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="42" y="0" width="10" height="20" />
              <rect x="84" y="0" width="10" height="20" />
              <rect x="126" y="0" width="10" height="23" />
              <rect x="168" y="0" width="10" height="23" />
              <rect x="210" y="0" width="10" height="20" />
              <rect x="252" y="0" width="10" height="23" />
              <rect x="294" y="0" width="10" height="20" />
              <rect x="336" y="0" width="10" height="23" />
              <rect x="378" y="0" width="10" height="23" />
              <rect x="420" y="0" width="10" height="20" />
              <rect x="462" y="0" width="10" height="20" />
              <rect x="504" y="0" width="10" height="23" />
              <rect x="546" y="0" width="10" height="20" />
            </svg>
          </div>
        </div>
      )}
    </div>
        </form>
        </div>
        </>
    )
}