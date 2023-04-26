import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenEntity, } from '../../entities/token.entity';

@Injectable({ providedIn: 'root'})
export class TokenStore {

  private readonly _tokenStore = new BehaviorSubject<TokenEntity[]>([]);

  readonly token$ = this._tokenStore.asObservable();

  readonly last_tokens$ = this.token$.pipe(
    map(token => [token[token.length - 1]])
  )

  private get token(): TokenEntity[] {
    return this._tokenStore.getValue();
  }

   private set token(val: TokenEntity[]) {
    this._tokenStore.next(val);
  }

  add(token: TokenEntity) {
    this.token = [
      ...this.token, 
      token//{id: this.token.length + 1, isCompleted: false, email: '', nome:'', }
    ];
  }

  remove(access_token: String) {
    this.token = this.token.filter(token => token.access_token !== access_token);
  }

  clean() {
    this.token = []
  }
}