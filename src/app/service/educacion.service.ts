import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educaction';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  URL='https://fwarg.herokuapp.com/educacion/';
  
  constructor(private http: HttpClient) {  }

  //para cargar todas
  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+ 'ver/educacion');
  }

//  para ver una sola
  public getEducacionById(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+ `ver/educacion/${id}`);
  }

  //para agregar una
  public addEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.URL+ 'new/educacion', educacion);
  }

  //para actualizar una
  public updateEducacion(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL+ `modificar/${id}?id=${id}&titulo=${educacion.titulo}&lugar=${educacion.lugar}&fecha_inicio=${educacion.fecha_inicio}&fecha_fin=${educacion.fecha_fin}`, educacion);
  }

  //para borrar una
  public deleteEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+ `delete/${id}`);
  }





}