import {Component} from 'angular2/core'
import {CourseService} from '../Services/course.service'
import {AutoGrowDirective} from '../Directives/auto-grow.directive'
import { NotificationsService } from '../Services/notification.service';
import { Notification } from '../Models/notification.model';
import { Notifications } from './notifications.component';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow/>
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
        <notifications></notifications>
        <div>
        <p><button (click)="someMethod()">Submit</button></p>
        </div>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective, Notifications]
})
export class CoursesComponent{
    title = "The title of courses page";
    courses;

    constructor(courseService: CourseService, private _notes: NotificationsService){
        this.courses = courseService.getCourses();
    }

    someMethod(): void {
    this._notes.add(new Notification('success', 'This shows up green!'));
    }
}