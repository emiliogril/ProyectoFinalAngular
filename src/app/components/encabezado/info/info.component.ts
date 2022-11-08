import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';
import { EncabezadoComponent } from '../encabezado.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  isLogged = false;
  info: Info = new Info("","","");

  constructor(
    
    private infoService: InfoService,
    private router: Router,
    private appComp: AppComponent,
    private infoComp: EncabezadoComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void{
    console.log(this.info);
    this.infoService.update(1, this.info).subscribe(
      data => {
        this.infoComp.cargarInfo();
        let a = alert("Modicada la información");
        if (a != null) {
          window.location.reload();
        } (error: any) => {
          let b = alert("No se pudo modificar la información");
          if (b != null) {
            window.location.reload();
          }}
        }
    )
  }
}



