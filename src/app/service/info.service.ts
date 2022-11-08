import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info';


@Injectable({
  providedIn: 'root'
})
export class InfoService {


  URL='https://fwarg.herokuapp.com/info/';

  constructor(private httpClient : HttpClient) {}

    public lista(): Observable<Info[]>{
      return this.httpClient.get<Info[]>(this.URL + 'getInfo/');
    }
  
    public detail(id: number): Observable<Info>{
      return this.httpClient.get<Info>(this.URL + `getInfo/1`);
    }
  
    public save(info: Info): Observable<any>{
      return this.httpClient.post<any>(this.URL + 'createInfo/', info);
    }
  
    public update(id: number, info: Info): Observable<any>{
      return this.httpClient.put<any>(this.URL + `editar/${id}?id=${id}&nombre=${info.nombre}&apellido=${info.apellido}&img=${info.img}`, info);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }

   
}
