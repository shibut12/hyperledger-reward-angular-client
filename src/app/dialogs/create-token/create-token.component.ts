import { Component, OnInit } from '@angular/core';
import { RewardxToken } from '../../models/rewardxToken';
import { BlockchainService } from '../../services/blockchain.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})
export class CreateTokenComponent implements OnInit {
  rewardxToken: RewardxToken;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<CreateTokenComponent>) { }

  ngOnInit() {
    this.rewardxToken = new RewardxToken();
  }

  save() {
    this.blockchainService.createToken(this.rewardxToken).then(token => {
      this.dialogRef.close(token);
   });

   this.dialogRef.close(null);
 }

 dismiss(){
   this.dialogRef.close(null);
 }

}
