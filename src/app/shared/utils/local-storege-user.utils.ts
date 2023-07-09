import { UserEntity } from '../entities/user.entity';

export class LocalStorageUserUtils {
	public getItem(): UserEntity {
		let getItem = localStorage.getItem('user');
		return <UserEntity>JSON.parse(getItem);
	}

	public setItem(item) {
		localStorage.setItem('user', JSON.stringify(item));
	}

	public removeItem() {
		localStorage.removeItem('user');
	}

	public isItem(): boolean {
		let getItem = localStorage.getItem('user');

		if (getItem == null) {
			return false;
		}

		if (getItem.length > 10) {
			return true;
		}

		return false;
	}

	public isSuperUser(): boolean {
		let getItem = localStorage.getItem('user');

		if (getItem.length > 10) {
			return true;
		}

		return false;
	}
}
