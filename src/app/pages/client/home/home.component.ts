import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '@app/shared/entities/user.entity';
import { UserStore } from '@app/shared/stores/customized/user-store';
import { TokenStore } from '@app/shared/stores/customized/token.store';
import { TokenEntity } from '@app/shared/entities/token.entity';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public user: Observable<UserEntity[]>;
	public token: Observable<TokenEntity[]>;

	constructor(
		private userStore: UserStore,
		private tokenStore: TokenStore
	) {}

	ngOnInit() {
		this.user = this.userStore.user$;
		this.token = this.tokenStore.token$;
	}
}
