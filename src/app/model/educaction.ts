export class Educacion{
    id?: number;
    titulo: string;
    lugar: string;
    fecha_inicio: number;
    fecha_fin: number;

constructor(titulo: string, lugar: string, fecha_inicio: number, fecha_fin: number, id?: number){
    this.id= id;
    this.titulo = titulo;
    this.lugar = lugar;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
}
}