import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { Merchant } from '../models/merchant';
import { Customer } from '../models/customer';
import { Reward } from '../models/reward';
import { RewardxToken } from '../models/rewardxToken';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { CreateMerchantComponent } from '../dialogs/create-merchant/create-merchant.component';
import { Router } from '@angular/router';
import { CreateCustomerComponent } from '../dialogs/create-customer/create-customer.component';
import { CreateTokenComponent } from '../dialogs/create-token/create-token.component';
import { MerchantSendCustomerComponent } from '../dialogs/merchant-send-customer/merchant-send-customer.component';
import { CustomerSendMerchantComponent } from '../dialogs/customer-send-merchant/customer-send-merchant.component';
import { CustomerSendCustomerComponent } from '../dialogs/customer-send-customer/customer-send-customer.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  merchants: Merchant[];
  customers: Customer[];
  rewards: Reward[];
  tokens: RewardxToken[];
  constructor(
    private blockchainService: BlockchainService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.blockchainService.loadAllMerchants();
    this.blockchainService.loadAllCustomers();
    this.blockchainService.loadAllRewards();
    this.blockchainService.loadAllTokens();

    this.blockchainService.merchants.subscribe(mrchnts => {
      if(mrchnts.length == 0) return;
      setTimeout(()=>{
        this.merchants = this.blockchainService.getAllMerchants();
      }, 500)
    });

    this.blockchainService.customers.subscribe(cstmers => {
      if(cstmers.length == 0) return;
      setTimeout(()=>{
        this.customers = this.blockchainService.getAllCustomers();
      }, 500)
    });

    this.blockchainService.customers.subscribe(rwrds => {
      if(rwrds.length == 0) return;
      setTimeout(()=>{
        this.rewards = this.blockchainService.getAllRewards();
      }, 500)
    });

    this.blockchainService.customers.subscribe(tkns => {
      if(tkns.length == 0) return;
      setTimeout(()=>{
        this.tokens = this.blockchainService.getAllTokens();
      }, 500)
    });

  }

  openCreateMerchantDialog(): void{
    let dialogRef = this.dialog.open(CreateMerchantComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("New Merchant added", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }

  openCreateCustomerDialog(): void{
    let dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("New Customer added", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }

  openCreateTokenDialog(): void{
    let dialogRef = this.dialog.open(CreateTokenComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("New token added", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }

  openTransferMerchantCustomerDialog(): void{
    let dialogRef = this.dialog.open(MerchantSendCustomerComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("Transfer from Merchant to customer has been completed", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }

  openTransferCustomerMerchantDialog(): void{
    let dialogRef = this.dialog.open(CustomerSendMerchantComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("Transfer from customer to merchant has been completed", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }

  openTransferCustomerCustomerDialog(): void{
    let dialogRef = this.dialog.open(CustomerSendCustomerComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("Transfer from customer to customer has been completed", "Verify")
        .onAction().subscribe(() => {
          //this.router.navigate(['/', result.id]);
        });
      }
    });
  }
  

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
