import { RouteEntity } from "../entities/route.entity"

export class LocalStorageRouteUtils {

    public getItem():RouteEntity{
        let getItem = localStorage.getItem('route')
        return <RouteEntity>JSON.parse(getItem)
    }

    public setItem(item:RouteEntity): void{
        localStorage.setItem('route', JSON.stringify(item))
    }

    public removeItem(){
        localStorage.removeItem('route')
    }

    public isItem():boolean{
        let getItem = localStorage.getItem('route')

        if(getItem == null){
          return false
        }
    
        if(getItem.length > 2){
          return true
        }

        return false
    }
}