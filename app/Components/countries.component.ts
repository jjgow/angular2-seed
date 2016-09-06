import { Component } from 'angular2/core'
import { CountriesService } from '../Services/countries.service'

@Component({
    selector: 'countries',
    template: `
        <h2>Countries</h2>
        <select
            multiple selectAll
            [(ngModel)]="countries"
            style="height: 150px">
            <option *ngFor="#country of countries" [value]="country">
                {{country}}
            </option>
        </select>
    `,
    providers: [CountriesService]
})
export class CountriesComponent{
    countries: string[];

    constructor(countriesService: CountriesService){
        this.countries = countriesService.getCountries();
    }
}