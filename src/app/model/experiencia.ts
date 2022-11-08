export class Experiencia {
    id? : number;
    cargo: string;
    lugar: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    
    constructor(cargo: string, descripcion: string, lugar: string ,fecha_inicio: string, fecha_fin: string) {
   
        this.cargo = cargo;
        this.lugar = lugar;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }    
}
