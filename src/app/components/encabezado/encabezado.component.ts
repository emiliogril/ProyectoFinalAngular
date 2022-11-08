import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  info = new Info("","","");
  isLoggedAdmin = false;
  isLogged = false;

  constructor(private infoService: InfoService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarInfo();
    if(this.tokenService.getAuthorities().includes('ROLE_ADMIN'))
      this.isLoggedAdmin = true;   
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logout();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }



  cargarInfo(): void {
    this.infoService.detail(33).subscribe(data => {
      this.info = data;
    })
  }

  onUpdate(): void{
    console.log(this.info);
    this.infoService.update(33, this.info).subscribe(
      data => {
        alert("Modificado el perfil");
        this.router.navigate(['']);
      }
    )
    window.location.reload();
  }


}
