import { Component, OnInit } from '@angular/core';
import { MerchantCustomerXfer } from '../../models/MerchantCustomerXfer';
import { BlockchainService } from '../../services/blockchain.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-send-merchant',
  templateUrl: './customer-send-merchant.component.html',
  styleUrls: ['./customer-send-merchant.component.scss']
})
export class CustomerSendMerchantComponent implements OnInit {
  xferObj: MerchantCustomerXfer;
  
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<CustomerSendMerchantComponent>) { }

  ngOnInit() {
    this.xferObj = new MerchantCustomerXfer();
  }

  save() {
    this.blockchainService.transferCustomerMerchant(this.xferObj).then(xfer => {
      this.dialogRef.close(xfer);
   });

   this.dialogRef.close(null);
 }

 dismiss(){
   this.dialogRef.close(null);
 }

}
