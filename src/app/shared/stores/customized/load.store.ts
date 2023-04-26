import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoadStore {

  private readonly _loadStore = new BehaviorSubject<boolean>(true);


  readonly load$ = this._loadStore.asObservable();


  public get load(): boolean {
    return this._loadStore.getValue();
  }

  public set load(val: boolean) {
    this._loadStore.next(val);
  }
}