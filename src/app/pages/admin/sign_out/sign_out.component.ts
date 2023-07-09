import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignOutService } from '@app/pages/admin/sign_out/sign_out.service';
import { UserStore } from '@app/shared/stores/customized/user-store';
import { TokenStore } from '@app/shared/stores/customized/token.store';
import { LoadStore } from '@app/shared/stores/customized/load.store';
import { LocalStorageTokenUtils } from '@app/shared/utils/local-storege-token.utils';
import { LocalStorageRouteUtils } from '@app/shared/utils/local-storege-route.utils';

@Component({
	selector: 'sign_out',
	templateUrl: './sign_out.component.html',
	styleUrls: ['./sign_out.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent implements OnInit {
	public load$: Observable<boolean> = this.loadStore.load$;

	constructor(
		private userStore: UserStore,
		private tokenStore: TokenStore,
		private router: Router,
		private loadStore: LoadStore,
		private service: SignOutService
	) {}

	ngOnInit() {}

	btnClickSignOut() {
		this.loadStore.load = false;
		this.userStore.clean();
		this.tokenStore.clean();
		new LocalStorageTokenUtils().removeItem();
		new LocalStorageRouteUtils().removeItem();

		this.service.signOut().subscribe(r => {
			if (r.getStatusCode() == 200) {
				this.loadStore.load = true;
				this.router.navigate(['/login']);
			}
		});
	}
}
