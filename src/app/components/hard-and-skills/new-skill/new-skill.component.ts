import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { HardAndSkillsComponent } from '../hard-and-skills.component';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  img: string = '';
  skill: string = '';
  descripcion: string = '';
  percent: number = 0;

  constructor(private skillsService: SkillsService,
    private skillComp: HardAndSkillsComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skl = new Skills(this.img, this.skill, this.descripcion, this.percent);
    this.skillsService.save(skl).subscribe(
      data => {
        this.skillComp.cargarSkills();
        let a = alert("Skill creada");
        if (a != null) {
          window.location.reload();
        } (error: any) => {
          this.skillComp.cargarSkills();
          let b = alert("No se pudo crear la skill");
          if (b != null) {
            window.location.reload();
          }
        }
      }
    )
  }
}