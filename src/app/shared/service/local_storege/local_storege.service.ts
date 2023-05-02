import { Injectable } from '@angular/core'
import { TokenStore } from '@app/shared/stores/customized/token.store';
import { LocalStorageTokenUtils } from '@app/shared/utils/local-storege-token.utils';


@Injectable()
export class LocalStoregeService {
    constructor(
        private local:LocalStorageTokenUtils,
        private store:TokenStore
    ){}

    /**
     * inscrever para obter o token pelo store e salvar local
     */
    public saveTokenLocal(){

        /** 
         * adicionar um token local na store 
         * chama um vez, ao inicializae a aplicação
         * um outro serviço vai verificar se este token é valido
         */
        if(this.local.isItem()){
            this.store.clean()
            this.store.add(this.local.getItem())
        }

        /**
         * fica ouvido se alguem adicionou um token no store, se sim, adiciona ele localmente
         */
        this.store.token$.subscribe((res)=>{
            if(res.length >= 1){
              
                var token = res.map(item => {
                    return {
                        access_token: item.access_token,
                        refresh_token: item.refresh_token
                    };
                });
                this.local.setItem(token[0])
            }
        })
    }
}