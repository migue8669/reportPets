
export class PetModel{
    $key!:string;
    tipoReporte!:string;
    nombre!:string;
    reporte!:string;
    foto!:string;
    long!:number;
    lat!:number;

constructor(){
    // this.$key=''
    this.reporte='';
    this.tipoReporte='';
    this.nombre='';
    
    this.foto='';
    this.long;
    this.lat;

}
}