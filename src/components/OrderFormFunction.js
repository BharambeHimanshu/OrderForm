import axios from "axios";

export function submitForm(inputs) {
  console.log("hasvdfjvdsj",inputs)
  let dateTime = inputs.Pickup_Date;
let date = new Date(dateTime);
let formattedDate = date.toLocaleString("en-US", {
day: "2-digit",
month: "2-digit",
year: "2-digit",
hour: "2-digit",
minute: "2-digit",
hour12: true
});
  let dateTime1 = inputs.expected_Date;
let date1 = new Date(dateTime1);
let formattedDate1 = date1.toLocaleString("en-US", {
day: "2-digit",
month: "2-digit",
year: "2-digit",
hour: "2-digit",
minute: "2-digit",
hour12: true
});
var formatedatelineitem = new Date(inputs.Pickup_Date).toLocaleDateString("en-GB", {
day: "2-digit",
month: "2-digit",
year: "numeric"
})

  // var data =JSON.stringify(
  //   [{
  //    "Origin": inputs.Location,
  //    "Destination": null,
  //    "Vehicle Type": inputs.VehicleType,
  //    "Transportation Service": "FTL",
  //    "Customer(*)": "SIEMENS HEALTHCARE PRIVATE LIMITED",
  //    "Consignor(*)": inputs.Origin,
  //    "Consignee(*)": "Unknown",
  //    "Pickup Date(DD-MM-YYYY)":"16-02-2023",
  //    "Booking Branch": inputs.Booking_Branch,
  //    "Contract Number": null,
  //    "Freight": "100",
  //    "Measurement Type(*)": "weight",
  //    "Quantity(*)": "1",
  //    "Quantity UOM(*)": "Units",
  //    "cf_Order By": "Chintamani Mayeka",
  //   "cf_Vehicle-type": "inputs.VehicleType",
  //   "cf_S.O Number/WBS Number": "inputs.SOnumber",
  //   "cf_Consignee Name": "inputs.ConsigneeName",
  //   "cf_Consignee Address": "inputs.ConsigneeAddress",
  //   "cf_Consignee Pincode": "inputs.ConsigneePincod",
  //   "cf_PM Name": "inputs.PMName",
  //   "cf_PM Number": "inputs.PMNumber",
  //   "cf_SHPL instructions": "inputs.SHPL_instructions",
  //   "cf_APML Remarks": "",
  //   "cf_expected pickup date and time": "formattedDate",
  //   "cf_EXPECTED TARGET DATE:": "formattedDate1",
  //   "cf_Number of CC Email": "inputs.no_cc",
  //   "cf_CC Email Id 1": "inputs.cc_1",
  //   "cf_CC Email Id 2": "inputs.cc_2 ",
  //   "cf_CC Email Id 3": "inputs.cc_3 ",
  //   "cf_CC Email Id 4": null,
  //   "cf_CC Email Id 5": null
  //   //  "cf_Order By": inputs.OrderBy,
  //   //  "cf_Vehicle-type": inputs.VehicleType,
  //   //  "cf_S.O Number/WBS Number":inputs.SOnumber,
  //   //  "cf_Consignee Name":inputs.ConsigneeName,
  //   //  "cf_Consignee Address":inputs.ConsigneeAddress,
  //   //  "cf_Consignee Pincode":inputs.ConsigneePincode,
  //   //  "cf_PM Name":inputs.PMName,
  //   //  "cf_PM Number":inputs.PMNumber,
  //   //  "cf_SHPL instructions":inputs.SHPL_instructions,
  //   //  "cf_APML Remarks":"",
  //   //  "cf_expected pickup date and time":formattedDate,
  //   //  "cf_EXPECTED TARGET DATE:":formattedDate1,
  //   //  "cf_Number of CC Email":inputs.no_cc,
  //   //  "cf_CC Email Id 1":inputs.cc_1 || null,
  //   //  "cf_CC Email Id 2":inputs.cc_2 || null,
  //   //  "cf_CC Email Id 3":inputs.cc_3 || null,
  //   //  "cf_CC Email Id 4":inputs.cc_4 || null,
  //   //  "cf_CC Email Id 5":inputs.cc_5 || null
  //  }
  // ]);
  
var data = JSON.stringify([
{
  "Origin": inputs.Location,
  "Destination": null,
  "Vehicle Type": null,
  "Transportation Service": "FTL",
  "Customer(*)": "SIEMENS HEALTHCARE PRIVATE LIMITED",
  "Consignor(*)": inputs.Origin,
  "Consignee(*)": "Unknown",
  "Pickup Date(DD-MM-YYYY)": "16-02-2023",
  "Booking Branch": "Mumbai",
  "Contract Number": null,
  "Freight": "100",
  "Measurement Type(*)": "weight",
  "Quantity(*)": "1",
  "Quantity UOM(*)": "Units",
  "cf_Order By": inputs.OrderBy,
  "cf_Vehicle-type": inputs.VehicleType,
  "cf_S.O Number/PO": inputs.SOnumber,
  "cf_WBS/COST": inputs.WBS,
  "cf_Consignee Name": inputs.ConsigneeName,
  "cf_Consignee Address": inputs.ConsigneeAddress,
  "cf_Consignee Pincode":inputs.ConsigneePincode,
  "cf_PM Name": inputs.PMName,
  "cf_PM Number": inputs.PMNumber,
  "cf_SHPL instructions": inputs.SHPL_instructions,
  "cf_APML Remarks": "",
  "cf_unqiuevalue":inputs.unique,
  "cf_MATERIAL":inputs.Material,
  "cf_expected pickup date and time": formattedDate,
  "cf_EXPECTED TARGET DATE:": formattedDate1,
  "cf_Number of CC Email": inputs.no_cc,
  "cf_CC Email Id 1": inputs.cc_1,
  "cf_CC Email Id 2": inputs.cc_2 ,
  "cf_CC Email Id 3": inputs.cc_3 ,
  "cf_CC Email Id 4": inputs.cc_4 ,
  "cf_CC Email Id 5": inputs.cc_5 
}
]);

  var config = {
    method: 'post',
    url: 'https://apis.fretron.com/automate/autoapi/run/80f5e63d-19e5-4160-817f-ba260f7fe3a4',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzI0MjAxNTcsInVzZXJJZCI6Ijc3N2Q5YzIwLTEyNWYtNDhhZS04MWZjLTUzZWI2ZWM3MjZmZSIsImVtYWlsIjoiZGF0YS5zY2llbmNlQGFnYXJ3YWxwYWNrZXJzLmNvbSIsIm1vYmlsZU51bWJlciI6IjgyOTE4NDk1NjUiLCJvcmdJZCI6IjQwNTJhYjI0LTA1NDMtNGNkNC1iNTE3LTllNzhlZmVlNGZlZCIsIm5hbWUiOiJQcml5YWVzaCBQYXRlbCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.QkU9OIMz0yf76zUJOtp7kVS3yAPZmJS1BMIiM4kxuzk', 
      'Content-Type': 'application/json'
    },
    data : data,
    
  };
  
  axios(config)
  .then( (response) => {
    console.log(data)
    console.log(response)
    if (response.data.data.successCount===1){
        alert("Order  has been Placed")
      // submitted = true;
    }
  })
  .catch(function (error) {
    alert("Order has been not been Placed")
    console.log(error);
  });
  
}

export function onOriginChange(sO) {
  let data  = [];
  let selectedLocation = "";

  let res = generateRandomAlphaNum(6)
  console.log( res);
  switch(sO) {
    case "SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "KOLKATA AIRPORT";
        break;
    case "SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai Port";
        break;
    case "SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Delhi";
        break;
    case "SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Bhiwandi";
        break;
    case "SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore";
        break;
    case "SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai";
        break;
    case "SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Kolkata";
        break;
    case "SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore";
        break;
    case "SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai";
        break;
    case "SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Delhi";
        break;
    case "SHPL - NAVA SHEVA- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Navi Mumbai";
        break;
    case "SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Kolkata";
        break;
    case "SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD":
        selectedLocation = "Chennai";
        break;
    case "SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD":
        selectedLocation = "Bhiwandi";
        break;
    case "SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore";
        break;
    case "SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Navi Mumbai";
        break;
    case "SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Mumbai";
        break;
    case "SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.":
        selectedLocation = "Bhiwandi";
        break;
    case "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Bhiwandi";
        break;
  }

  data[0] = "SIEMENS HEALTHCARE PRIVATE LIMITED";
  data[1] = selectedLocation;
  data[2] = sO;
  data[3] = "Mumbai"
  data[4] = res;
  console.log(data);
  return data;
}

function generateRandomAlphaNum(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let uniquevalue="APML"+result
  return uniquevalue;
}