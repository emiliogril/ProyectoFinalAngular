import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/service/aboutme.service';
import { AboutMeComponent } from './about-me.component';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  isLogged = false;
  aboutMe: AboutMe = new AboutMe("");

  constructor(
    private aboutMeService: AboutMeService,
    private router: Router,
    private appComp: AppComponent,
    private aboutMeComp: AboutMeComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    console.log(this.aboutMe);
    this.aboutMeService.update(33, this.aboutMe).subscribe(
      data => {
        this.aboutMeComp.cargarAboutMe();
        let a = alert("Modificada la información acerca de mi");
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


