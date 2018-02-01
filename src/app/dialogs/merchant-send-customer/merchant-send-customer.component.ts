import { Component, OnInit } from '@angular/core';
import { MerchantCustomerXfer } from '../../models/MerchantCustomerXfer';
import { BlockchainService } from '../../services/blockchain.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-merchant-send-customer',
  templateUrl: './merchant-send-customer.component.html',
  styleUrls: ['./merchant-send-customer.component.scss']
})
export class MerchantSendCustomerComponent implements OnInit {
  xferObj: MerchantCustomerXfer;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<MerchantSendCustomerComponent>) { }

  ngOnInit() {
    this.xferObj = new MerchantCustomerXfer();
  }

  save() {
    this.blockchainService.transferMerchantCustomer(this.xferObj).then(xfer => {
      this.dialogRef.close(xfer);
   });

   this.dialogRef.close(null);
 }

 dismiss(){
   this.dialogRef.close(null);
 }

}
