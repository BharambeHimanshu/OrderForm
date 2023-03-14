import axios from "axios";

class OrderformComponent {
    constructor() {
      this.no_cctt = 0;
      this.Pickup = '';
      this.submitted = false;
      this.selectedOrigin = '';
      this.selectedLocation = '';
      this.uniquevalue = '';
      this.bookingbranch = '';
      this.selectedCustomer = '';
      this.selectedConsignor = '';
      this.selectedDestination = '';
      this.selectedConsignee = '';
      this.ccEmailCount = 1;
      this.ccEmailInputs = new Array(this.ccEmailCount);
      this.selectedQty = '';
      this.qtyOptions = [1, 2, 3, 4, 5];
      this.forms = [];
      this.form = undefined;
      this.cc = 5;
      this.formBuilder = undefined;
    }
  
    updateCCInputs() {
      this.ccEmailInputs = new Array(this.ccEmailCount);
    }
  
    formsubmit() {
      this.submitted = true;
    }
    
  }