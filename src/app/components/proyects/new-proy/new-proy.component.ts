import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ProyectsComponent } from '../proyects.component';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  url: string = '';

  constructor(private proyectoService: ProyectoService, 
    private proyComp: ProyectsComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.descripcion, this.url);
    this.proyectoService.save(proy).subscribe(
      (data) => {
        this.proyComp.cargarProyecto();
          let a = alert("Creado el proyecto");
          if (a != null) {
            window.location.reload();
          } (error: any) => {
            let b = alert("No se pudo crear el proyecto");
            if (b != null) {
              window.location.reload();
            }
          }
        }
      )
    }
  }

