import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';

import { AboutMeService } from 'src/app/service/aboutme.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: AboutMe = new AboutMe("");
  descripcion: string = "";

  isLogged = false;

  constructor(private aboutMeService: AboutMeService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarAboutMe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

cargarAboutMe(): void {
  this.aboutMeService.detail(33).subscribe(data => {
    this.aboutMe = data;
  })
}

}
