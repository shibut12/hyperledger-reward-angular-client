import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Merchant } from '../models/merchant';
import { Customer } from '../models/customer';
import { RewardxToken } from '../models/rewardxToken';
import { Reward } from '../models/reward';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MerchantCustomerXfer } from '../models/MerchantCustomerXfer';
import { CustomerCustomerXfer } from '../models/CustomerCustomerXfer';

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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

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

  //Create Methods

  createMerchant(merchant: Merchant): Promise<Merchant> {
    const userUrl = 'http://18.217.75.196:3000/api/Create_Marchent';
    return new Promise((resolver, reject) => {
       this.dataStore.merchants.push(merchant);
       this._merchants.next(Object.assign({}, this.dataStore).merchants);
       this.http.post<Merchant>(userUrl, merchant).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(merchant);
    });
  }

  createCustomer(customer: Customer): Promise<Customer> {
    const userUrl = 'http://18.217.75.196:3000/api/Create_Customer';
    return new Promise((resolver, reject) => {
       this.dataStore.customers.push(customer);
       this._customers.next(Object.assign({}, this.dataStore).customers);
       this.http.post<Customer>(userUrl, customer).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(customer);
    });
  }
  createToken(token: RewardxToken): Promise<RewardxToken> {
    const userUrl = 'http://18.217.75.196:3000/api/Create_Token';
    return new Promise((resolver, reject) => {
       this.dataStore.tokens.push(token);
       this._tokens.next(Object.assign({}, this.dataStore).tokens);
       this.http.post<RewardxToken>(userUrl, token).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(token);
    });
  }
  transferMerchantCustomer(xferObj: MerchantCustomerXfer): Promise<MerchantCustomerXfer> {
    const userUrl = 'http://18.217.75.196:3000/api/SendToken_Merchant_To_Customer';
    return new Promise((resolver, reject) => {
       this.http.post<MerchantCustomerXfer>(userUrl, xferObj,this.httpOptions).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(xferObj)
       
    });
  }
  transferCustomerMerchant(xferObj: MerchantCustomerXfer): Promise<MerchantCustomerXfer> {
    const userUrl = 'http://18.217.75.196:3000/api/SendToken_Customer_To_Marchent';
    return new Promise((resolver, reject) => {
       this.http.post<MerchantCustomerXfer>(userUrl, xferObj,this.httpOptions).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(xferObj)
       
    });
  }
  transferCustomerCustomer(xferObj: CustomerCustomerXfer): Promise<CustomerCustomerXfer> {
    const userUrl = 'http://18.217.75.196:3000/api/SendToken_Customer_To_Customer';
    return new Promise((resolver, reject) => {
       this.http.post<CustomerCustomerXfer>(userUrl, xferObj,this.httpOptions).subscribe(data => console.log(data), (err: HttpErrorResponse) => console.log(err));
       resolver(xferObj)
       
    });
  }
}
