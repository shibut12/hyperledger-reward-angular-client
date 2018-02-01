import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Merchant } from '../models/merchant';
import { Customer } from '../models/customer';
import { RewardxToken } from '../models/rewardxToken';
import { Reward } from '../models/reward';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlockchainService {
  private _merchants: BehaviorSubject<Merchant[]>;
  private _customers: BehaviorSubject<Customer[]>;
  private _tokens: BehaviorSubject<RewardxToken[]>;
  private _rewards: BehaviorSubject<Reward[]>;
  
  private dataStore: {
    merchants: Merchant[],
    customers: Customer[],
    tokens: RewardxToken[],
    rewards: Reward[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = {
      merchants: [],
      customers: [],
      tokens: [],
      rewards: [] };

      this._merchants = new BehaviorSubject<Merchant[]>([]);
      this._customers = new BehaviorSubject<Customer[]>([]);
      this._tokens = new BehaviorSubject<RewardxToken[]>([]);
      this._rewards = new BehaviorSubject<Reward[]>([]);
   }
   
   get merchants(): Observable<Merchant[]>{
    return this._merchants.asObservable();
  }

  get customers(): Observable<Customer[]>{
    return this._customers.asObservable();
  }

  get rewards(): Observable<Reward[]>{
    return this._rewards.asObservable();
  }

  get tokens(): Observable<RewardxToken[]>{
    return this._tokens.asObservable();
  }

  // Merchants operations
   loadAllMerchants(){
    const userUrl = 'http://18.217.75.196:3000/api/marchent';
   return this.http.get<Merchant[]>(userUrl)
     .subscribe(data => {
       this.dataStore.merchants = data;
       this._merchants.next(Object.assign({}, this.dataStore).merchants);
       //console.log(this.dataStore.merchants);
     }, error => {
       console.log("Failed to fetch users");
     });
  }

  loadAllCustomers(){
    const userUrl = 'http://18.217.75.196:3000/api/customer';
   return this.http.get<Customer[]>(userUrl)
     .subscribe(data => {
       this.dataStore.customers = data;
       this._customers.next(Object.assign({}, this.dataStore).customers);
       //console.log(this.dataStore.customers);
     }, error => {
       console.log("Failed to fetch users");
     });
  }

  loadAllRewards(){
    const userUrl = 'http://18.217.75.196:3000/api/reward';
   return this.http.get<Reward[]>(userUrl)
     .subscribe(data => {
       this.dataStore.rewards = data;
       this._rewards.next(Object.assign({}, this.dataStore).rewards);
       //console.log(this.dataStore.rewards);
     }, error => {
       console.log("Failed to fetch users");
     });
  }

  loadAllTokens(){
    const userUrl = 'http://18.217.75.196:3000/api/token';
   return this.http.get<RewardxToken[]>(userUrl)
     .subscribe(data => {
       this.dataStore.tokens = data;
       this._tokens.next(Object.assign({}, this.dataStore).tokens);
       //console.log(this.dataStore.tokens);
     }, error => {
       console.log("Failed to fetch users");
     });
  }

  //Returns
  getAllMerchants(){
    return this.dataStore.merchants;
  };
  getAllCustomers(){
    return this.dataStore.customers;
  };
  getAllRewards(){
    return this.dataStore.rewards;
  };
  getAllTokens(){
    return this.dataStore.tokens;
  };


}
