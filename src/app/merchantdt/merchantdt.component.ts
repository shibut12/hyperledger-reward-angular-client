import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Merchant } from '../models/merchant';

@Component({
  selector: 'app-merchantdt',
  templateUrl: './merchantdt.component.html',
  styleUrls: ['./merchantdt.component.scss']
})
export class MerchantdtComponent implements OnInit {
  @Input() merchants: Merchant[];

  displayedColumns = ['marchentId', 'name'];
  dataSource : MatTableDataSource<Merchant>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Merchant>(this.merchants);
  }

}