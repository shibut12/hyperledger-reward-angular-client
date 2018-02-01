import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { BlockchainService } from '../../services/blockchain.service';
import { CreateMerchantComponent } from '../create-merchant/create-merchant.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer;


  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<CreateMerchantComponent>) { }

  ngOnInit() {
    this.customer = new Customer();
  }

  save() {
    this.blockchainService.createCustomer(this.customer).then(cust => {
      this.dialogRef.close(cust);
   });

   this.dialogRef.close(null);
  }

 dismiss() {
   this.dialogRef.close(null);
 }

}
