export class Link {
    titulo: string;
    link: string;
    votos: number;

    constructor(titulo: string, link: string, votes?: number){
        this.titulo = titulo;
        this.link = link;
        this.votos = votes || 0;
    }

    incrementar() {
        this.votos++;
    }

    decrementar() {
        this.votos--;
    }
 }