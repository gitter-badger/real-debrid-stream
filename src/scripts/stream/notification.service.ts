import {Injectable} from 'angular2/core';

@Injectable()
export class NotificationService {
	/* tslint:disable */
	constructor() {
		if(Notification.permission !== 'granted') {
			Notification.requestPermission();
		}
	}

	notify(txt: string): void {
		if (!Notification) {
			alert('Desktop notifications not available in your browser. Try Chromium.');
		} else if (Notification.permission !== 'granted') {
			Notification.requestPermission();
		} else {
			Notification('Notification title', {
				icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
				body: 'Hey there! You\'ve been notified!',
			});
		}
	}
	/* tslint:enable */
}
