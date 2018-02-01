import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Merchant } from '../models/merchant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customerdt',
  templateUrl: './customerdt.component.html',
  styleUrls: ['./customerdt.component.scss']
})
export class CustomerdtComponent implements OnInit {
  @Input() customers: Customer[];

  displayedColumns = ['customerId', 'name'];
  dataSource : MatTableDataSource<Customer>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
  }

}
