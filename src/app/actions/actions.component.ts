import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { Merchant } from '../models/merchant';
import { Customer } from '../models/customer';
import { Reward } from '../models/reward';
import { RewardxToken } from '../models/rewardxToken';

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
  constructor(private blockchainService: BlockchainService) { }

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

}
