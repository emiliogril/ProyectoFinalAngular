import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  id?: number;
  titulo: string = '';
  lugar: string = '';
  fecha_inicio: number = 0;
  fecha_fin: number = 0;

  educacion: Educacion = new Educacion("", "", 0, 0);
  educacionLista: Educacion[] = [];

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService,
    private router: Router) { }
  isLogged = false;
  modalOn = false;
  newModalOn = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacionLista = data;
    })
  }

  onDeleteEdu(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.educacionService.deleteEducacion(id)
        .subscribe(data => {
          this.cargarEducacion();
          let suc = alert("Eliminada la educacion");
          if (suc != null) {
            window.location.reload();
          }
        }, error => {
          this.cargarEducacion();
          let fail = alert("Eliminada la educacion!");
          if (fail != null) {
            window.location.reload();
          }
        }
        );
    }
  }

  onUpdateEdu(id?: number) {
    console.log(id);
    let educ = this.educacionLista.find(x => x.id == id);
    if (id != undefined && educ != undefined) {
      this.educacionService.updateEducacion(id, educ).subscribe(
        data => {
          this.cargarEducacion();
          let a = alert("Modificada la educacion");
          if (a != null) {
            window.location.reload();
          }
        }
      )
    }
  }

  onModal() {
    this.modalOn = true;
  }
  onModalOff() {
    this.modalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.newModalOn = true;
  }
  onNewModalOff() {
    this.newModalOn = false;
  }



}