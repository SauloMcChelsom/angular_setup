import { Injectable } from '@angular/core'
import { TokenEntity } from '@app/shared/entities/token.entity';
import { TokenStore } from '@app/shared/stores/customized/token.store';
import { LocalStorageTokenUtils } from '@app/shared/utils/local-storege-token.utils';

@Injectable()
export class LocalStoregeService {
    constructor(
        private tokenLocal:LocalStorageTokenUtils,
        private tokenStore:TokenStore
    ){}

    public token(){
        if(this.tokenLocal.isItem()){
            this.tokenStore.clean()
            this.tokenStore.add(this.tokenLocal.getItem())
        }

        this.tokenStore.token$.subscribe((res)=>{
            if(res.length >= 1){
              
                var token = res.map(item => {
                    return {
                        access_token: item.access_token,
                        refresh_token: item.refresh_token
                    };
                });
                this.tokenLocal.setItem(token[0])
            }
        })
    }
}