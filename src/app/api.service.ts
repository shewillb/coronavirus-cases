import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from './models/cases'
import { Statistic } from './models/statistic';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
const globalUrl = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief'
//https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=US&onlyCountries=true

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getGlobalCases(): Observable<Cases> {
    return this.http.get<Cases>(`${globalUrl}`)
      .pipe(
        tap(cases => console.log('fetched global cases')),
        catchError(this.handleError<Cases>('getCases'))
      );
  }

  getCases(): Observable<Cases[]> {
    return this.http.get<Cases[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  getCasesById(id: string): Observable<Cases[]> {
    const url = `${apiUrl}/&iso2=${id}`;
    return this.http.get<Cases[]>(url).pipe(
      tap(_ => console.log(`fetched cases id=${id}`)),
      catchError(this.handleError<Cases[]>(`getCasesById id=${id}`))
    );
  }

  addCases(cases: Cases): Observable<Cases> {
    return this.http.post<Cases>(apiUrl, cases, httpOptions).pipe(
      tap((c: Cases) => console.log(`added cases w/ id=${c.countryregion}`)),
      catchError(this.handleError<Cases>('addCases'))
    );
  }

  updateCases(id: string, cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }

  deleteCases(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cases id=${id}`)),
      catchError(this.handleError<Cases>('deleteCases'))
    );
  }

  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url).pipe(
      tap(_ => console.log(`fetched statistic status=${status}`)),
      catchError(this.handleError<Statistic>(`getStatistic status=${status}`))
    );
  }
  
}
