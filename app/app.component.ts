import { Component } from 'angular2/core';
import { CoursesComponent } from './Components/courses.component';
import { AuthorsComponent } from './Components/authors.component';
import { CountriesComponent } from './Components/countries.component';
import { Notifications } from './Components/notifications.component';

@Component({
    selector: 'my-app',
    template: `<form (ngSubmit)="onSubmit">
    <h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    <countries></countries>
    <div>
        <p><button class="save" focusMe  type="submit">Submit</button></p>
    </div>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
    </form>
    <notifications></notifications>
    `,
    directives: [CoursesComponent, AuthorsComponent, CountriesComponent, Notifications]
})
export class AppComponent { 
    submitted = false;
    selectedCountries: string[];

    onSubmit(){
        this.submitted = true;
        this.displayData();
    }

    displayData(){
        
    }
}