import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Cases } from '../models/cases';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  cases: Cases = { countryregion: '', confirmed: null,  deaths: null, recovered: null, countrycode: null, lastupdate: '' };
  isLoadingResults = true;

  ngOnInit() { 
    this.getCasesDetails(this.route.snapshot.params.id);
  }

  getCasesDetails(id: string) {
    this.api.getCasesById(id)
      .subscribe((data: any) => {
        this.cases = data;
        console.log(this.cases);
        this.isLoadingResults = false;
      });
  }

}
