import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RewardxToken } from '../models/rewardxToken';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-tokendt',
  templateUrl: './tokendt.component.html',
  styleUrls: ['./tokendt.component.scss']
})
export class TokendtComponent implements OnInit {
  @Input() tokens: RewardxToken[];

  displayedColumns = ['name', 'value', 'symbol', 'marchentId', 'assignedToMerchantFlag', 'assignedToCustomerFlag'];
  dataSource : MatTableDataSource<RewardxToken>;
  
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<RewardxToken>(this.tokens);
  }

}
