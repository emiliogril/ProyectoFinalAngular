import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  
  URL='https://fwarg.herokuapp.com/acercade/';
  

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<AboutMe[]>{
    return this.httpClient.get<AboutMe[]>(this.URL + 'ver/personas');
  }

  public detail(id: number): Observable<AboutMe>{
    return this.httpClient.get<AboutMe>(this.URL + `perfil/33`);
  }

  public save(aboutMe: AboutMe): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new/persona', aboutMe);
  }

  public update(id: number, aboutMe: AboutMe): Observable<any>{
    return this.httpClient.put<any>(this.URL + `modificar/${id}?id=${id}&descripcion=${aboutMe.descripcion}`, aboutMe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

