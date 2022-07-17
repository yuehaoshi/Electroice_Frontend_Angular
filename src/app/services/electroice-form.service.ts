import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //Reactive JavaScript Framework
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import { Country } from '../common/country';
import { map } from 'rxjs/operators';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class ElectroiceFormService {

  private countriesUrl = "http://localhost:8080/api/countries";
  private statesUrl = "http://localhost:8080/api/states";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    )
  }

  getStates(theCountryCode: string): Observable<State[]> {
    //search Url
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;
    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    )
  }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    //build an array for "Month" dropdpwn list
    //start at current month and loop until
    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }
    return of(data);
    //the "of" operator from rxjs will wrap on object as an Observable
  }

  getCreditCardYeads(): Observable<number[]> {
    let data: number[] = [];
    //build an array for "Year" downlist list
    // start at current year and loop for next 10 years
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    return of(data);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
    //Unwraps the JSON Spring Data REST _embedded entry
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  }
}
