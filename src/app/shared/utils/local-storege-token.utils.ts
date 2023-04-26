export class LocalStorageTokenUtils {

    public getItem(){
        let getItem = localStorage.getItem('token')
        return JSON.parse(getItem)
    }

    public getAuthToken(){
        const token = this.getItem()
        if(token){
            return token.token
        }
        return null
    }

    public setItem(item){
        localStorage.setItem('token', JSON.stringify(item))
    }

    public removeItem(){
        localStorage.removeItem('token')
    }

    public isItem():boolean{
        let getItem = localStorage.getItem('token')

        if(getItem == null){
          return false
        }
    
        if(getItem.length > 10){
          return true
        }

        return false
    }
}