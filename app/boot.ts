import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { NotificationsService } from './Services/notification.service';

bootstrap(AppComponent, [ NotificationsService ]);