import { Component } from 'angular2/core';

import { NotificationsService } from '../Services/notification.service';
import { Notification } from '../Models/notification.model';

@Component({
    selector: 'notifications',
    template:`
    <div class="notifications">
        <div (click)="hide(note)" class="{{ note.type }}"
                *ngFor="#note of _notes">
            {{ note.message }}
        </div>
    </div>
    `
})
export class Notifications {
    private _notes: Notification[];

    constructor(private _notifications: NotificationsService) {
        this._notes = new Array<Notification>();

        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 3000);
        });
    }

    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
}