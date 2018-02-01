import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Reward } from '../models/reward';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-rewarddt',
  templateUrl: './rewarddt.component.html',
  styleUrls: ['./rewarddt.component.scss']
})
export class RewarddtComponent implements OnInit {
  @Input() rewards: Reward[];

  displayedColumns = ['rewardId', 'name', 'marchentId', 'tokenamount', 'validity', 'customerId', 'redeemFlag'];
  dataSource : MatTableDataSource<Reward>;
  
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Reward>(this.rewards);
  }

}