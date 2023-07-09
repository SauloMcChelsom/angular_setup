import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role, UserEntity } from '../../entities/user.entity';

@Injectable({ providedIn: 'root' })
export class UserStore {
	// - Definimos o estado inicial no construtor de BehaviorSubject
	// - Ninguém fora da Store deve ter acesso ao BehaviorSubject
	// porque tem os direitos de gravação
	// - A gravação no estado deve ser tratada por méuser Store especializados (ex: adduser, removeuser, etc)
	// - Crie um BehaviorSubject por entidade da loja, por exemplo, se você tiver userGroups
	// cria um novo BehaviorSubject para ele, assim como o observable$,
	private readonly _userStore = new BehaviorSubject<UserEntity[]>([]);

	// Expõe a parte observável$ do assunto _user (somente fluxo de leitura)
	readonly user$ = this._userStore.asObservable();

	readonly userIsUser$ = this.user$.pipe(map(user => user.filter(user => user.getRole() == Role.USER)));

	readonly userIsAdmin$ = this.user$.pipe(map(user => user.filter(user => user.getRole() == Role.ADMIN)));

	readonly last_users$ = this.user$.pipe(map(user => [user[user.length - 1]]));

	// the getter will return the last value emitted in _user subject
	private get user(): UserEntity[] {
		return this._userStore.getValue();
	}

	// atribuir um valor a this.user irá colocá-lo no observável
	// e até user os assinantes (ex: this.user = [])
	private set user(val: UserEntity[]) {
		this._userStore.next(val);
	}

	add(user: UserEntity) {
		// atribuímos uma nova cópia de user adicionando um novo user a ele
		// com ID atribuído automaticamente (não faça isso em casa, use uuid())
		this.user = [
			...this.user,
			user, //{id: this.user.length + 1, isCompleted: false, email: '', nome:'', }
		];
	}

	remove(id: number) {
		this.user = this.user.filter(user => user.getId() !== id);
	}

	clean() {
		this.user = [];
	}
}
