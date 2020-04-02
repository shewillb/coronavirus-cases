import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../models/cases';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor( private api: ApiService) { }
  displayedColumns: string[] = ['countryregion', 'confirmed', 'deaths', 'recovered'];
  data: any;
  isLoadingResults = true;
  globalData: Cases;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    // this.data.sort = this.sort;
    this.api.getCases()
    .subscribe((res: any) => {
      this.data = new MatTableDataSource(res);
      this.data.sort = this.sort;
      this.data.paginator = this.paginator;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    this.api.getGlobalCases()
    .subscribe((res: any) => {
      this.globalData = res;
      console.log(this.globalData);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

}
