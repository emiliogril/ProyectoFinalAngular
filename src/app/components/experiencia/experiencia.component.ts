import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  modalOn: boolean = false;
  experienciaLista: Experiencia[] = [];
  
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }
    
    isLogged = false;
  
    ngOnInit(): void { 
    this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged = false;
      }
    }

    cargarExperiencia(){
      this.experienciaService.list().subscribe(
        (data) => {
          this.experienciaLista = data;
        }
      );
    }

    onDeleteExp(id?: number){
      console.log(id);
      if(id != undefined){
        this.experienciaService.delete(id)
        .subscribe(data => {
          this.cargarExperiencia();
          let a = alert("Eliminada la experiencia");
          if (a != null) {
            window.location.reload();
          }
        }
      )
    }
  }
  
    onUpdateExp(id?: number){
      console.log(id);
      let exp = this.experienciaLista.find(x => x.id == id);
      if(id != undefined && exp != undefined){
        this.experienciaService.update(id, exp).subscribe(
        data => {
            this.cargarExperiencia();
            let a = alert("Modificada la experiencia");
            if (a != null) {
              window.location.reload();
            }
          }
        )
      }
    }

    onModal(){
      this.modalOn=true;
    }
  
    onModalOff(){
      this.modalOn=false;
    }

}
