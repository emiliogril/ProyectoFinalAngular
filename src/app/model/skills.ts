export class Skills {
    id?: number;
    img: string;
    skill: string;
    descripcion: string;
    percent: number;

constructor(img: string, skill: string, descripcion: string, percent: number) {
    this.img = img;
    this.skill = skill;
    this.descripcion = descripcion;
    this.percent = percent;
}
}