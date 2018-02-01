import { Component, OnInit } from '@angular/core';
import { CustomerCustomerXfer } from '../../models/CustomerCustomerXfer';
import { BlockchainService } from '../../services/blockchain.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-send-customer',
  templateUrl: './customer-send-customer.component.html',
  styleUrls: ['./customer-send-customer.component.scss']
})
export class CustomerSendCustomerComponent implements OnInit {
  xferObj: CustomerCustomerXfer;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<CustomerSendCustomerComponent>) { }

  ngOnInit() {
    this.xferObj = new CustomerCustomerXfer();
  }

  save() {
    this.blockchainService.transferCustomerCustomer(this.xferObj).then(xfer => {
      this.dialogRef.close(xfer);
   });

   this.dialogRef.close(null);
 }

 dismiss(){
   this.dialogRef.close(null);
 }

}
