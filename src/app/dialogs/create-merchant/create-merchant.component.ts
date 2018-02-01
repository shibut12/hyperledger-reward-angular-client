import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Merchant } from '../../models/merchant';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-create-merchant',
  templateUrl: './create-merchant.component.html',
  styleUrls: ['./create-merchant.component.scss']
})
export class CreateMerchantComponent implements OnInit {
  merchant: Merchant;

  constructor( 
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<CreateMerchantComponent>) { }

  ngOnInit() {
    this.merchant = new Merchant();
  }

 save() {
     this.blockchainService.createMerchant(this.merchant).then(mer => {
       this.dialogRef.close(mer);
    });

    this.dialogRef.close(null);
  }

  dismiss(){
    this.dialogRef.close(null);
  }

}