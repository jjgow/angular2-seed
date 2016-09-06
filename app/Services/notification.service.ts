import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

import { Notification } from '../Models/notification.model';

@Injectable()
export class NotificationsService {
    private _notifications = new Subject<Notification>();

    public noteAdded = this._notifications.asObservable();

    public add(notification: Notification) {
        this._notifications.next(notification);
    }
}