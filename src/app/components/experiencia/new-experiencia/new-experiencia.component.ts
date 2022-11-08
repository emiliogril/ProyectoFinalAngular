import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  cargo: string = '';
  lugar: string = '';
  descripcion: string = '';
  f_inicio: string = '';
  f_fin: string = '';

  constructor(private experienciaService: ExperienciaService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.cargo, this.descripcion, this.lugar, this.f_inicio, this.f_fin);
    this.experienciaService.save(exp).subscribe(
      (data) => {
        alert('Experiencia creada con exito');
        this.router.navigate(['']);
      }, (error) => {
        alert('Error al crear experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
