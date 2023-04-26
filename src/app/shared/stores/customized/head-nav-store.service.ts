import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class HeadNavStoreService {

   // - Definimos o estado inicial no construtor de BehaviorSubject
   // - Ninguém fora da Store deve ter acesso ao BehaviorSubject
   // porque tem os direitos de gravação
   // - A gravação no estado deve ser tratada por méheadNav Store especializados (ex: addHeadNav, removeHeadNav, etc)
   // - Crie um BehaviorSubject por entidade da loja, por exemplo, se você tiver HeadNavGroups
   // cria um novo BehaviorSubject para ele, assim como o observable$,
  private readonly _headNav = new BehaviorSubject<HeadNav[]>([]);

  // Expõe a parte observável$ do assunto _headNav (somente fluxo de leitura)
  readonly headNav$ = this._headNav.asObservable();


  // we'll compose the headNav$ observable with map operator to create a stream of only completed headNav
  readonly completedHeadNavs$ = this.headNav$.pipe(
    map(headNav => headNav.filter(headnav => headnav.isCompleted))
  )

  readonly lastHeadNavs$ = this.headNav$.pipe(
    map(headNav => [headNav[headNav.length - 1]])
  )

  // the getter will return the last value emitted in _headNav subject
  get headNav(): HeadNav[] {
    return this._headNav.getValue();
  }

   // atribuir um valor a this.headNav irá colocá-lo no observável
   // e até headNav os assinantes (ex: this.headNav = [])
   set headNav(val: HeadNav[]) {
    this._headNav.next(val);
  }

  add(title: _title) {
    // atribuímos uma nova cópia de headNav adicionando um novo headnav a ele 
    // com ID atribuído automaticamente (não faça isso em casa, use uuid())
    this.headNav = [
      ...this.headNav, 
      {id: this.headNav.length + 1, title, isCompleted: false}
    ];
  }

  remove(id: number) {
    this.headNav = this.headNav.filter(headnav => headnav.id !== id);
  }

  clean() {
    this.headNav = []
  }

  setCompleted(id: number, isCompleted: boolean) {
    let headnav = this.headNav.find(headnav => headnav.id === id);

    if(headnav) {
       // precisamos fazer uma nova cópia do array headNav, e do headnav também
       // lembre-se, nosso estado sempre deve permanecer imutável
       // caso contrário, a detecção de alteração por push não funcionará e não atualizará sua visualização
      const index = this.headNav.indexOf(headnav);
      this.headNav[index] = {
        ...headnav,
        isCompleted
      }
      this.headNav = [...this.headNav];
    }
  }
}

export type _title = "head-nav-user" | "head-nav-client" | "head-nav-admin";

interface HeadNav {
  title:_title
  id:number
  isCompleted:boolean
}