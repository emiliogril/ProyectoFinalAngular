import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';
import { EducacionComponent } from './educacion.component';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  titulo: string = '';
  lugar: string = '';
  fecha_inicio!: number;
  fecha_fin!: number;

  constructor(private educacionService: EducacionService, 
              private eduComp: EducacionComponent,
              private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void{
    const edu = new Educacion(this.titulo, this.lugar, this.fecha_inicio, this.fecha_fin);
    this.educacionService.addEducacion(edu).subscribe(
      data => {
        this.eduComp.cargarEducacion();
        let a = alert("Nueva educación");
        if (a != null) {
          window.location.reload();
        } (error: any) => {
          this.eduComp.cargarEducacion();
          let b = alert("No se pudo agregar la educación");
          if (b != null) {
            window.location.reload();
          }}
        }
    )
  }
}

