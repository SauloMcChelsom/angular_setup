import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { environment as API } from '@env/environment'

@Injectable()
export class HeadNavClientService {

  private sendImageMapping = `${API.api_fake}`

  constructor(private http: HttpClient) { }

  public sedMapToRepository(object: any) {
   
    const formData: FormData = new FormData();
    formData.append('name',  object.name);
    formData.append('station', object.station.toString());
    formData.append('filename', object.filename);
    return this.http.post(this.sendImageMapping, formData).pipe(map(result=>result))
  }
}
