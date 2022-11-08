export class AboutMe{
    id?: number;
    apellido: string;
    nombre: string;
    descripcion: string;

constructor(apellido: string, nombre: string, descripcion: string){
    this.apellido = apellido;
    this.nombre = nombre;
    this.descripcion = descripcion;
}
}