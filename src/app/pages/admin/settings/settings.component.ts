import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
