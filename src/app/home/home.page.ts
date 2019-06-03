import { Component,  OnInit} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
	public slides: any = [];
	public mensaje: string='';
	public plantas: any=[{
		nombre:'Manzanilla',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	},
	{
		nombre:'Quinua',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	},
	{
		nombre:'Coca',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Alcachofa',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Eucalipto',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Lampazo',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Huira-huira',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Noni',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Linaza',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Romero',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Chirimolla',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Cola de Caballo',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Lechuga',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Rosa',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Sabila',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Retama',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Uña de gato',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Cedron',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Hierbabuena',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'perejil',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Albahaca',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}
	,
	{
		nombre:'Diente de leon',
		imagen:'plantar-manzanilla.png',
		descripcion:`VISION
        	Ser una empresa lider en tecnologias moviles integradas que le garantice a nuestros clientes un interfaz amigable e innovador de facil uso orientado a pequeñas y medianes empresas nacionales e internacionales
        	`,
	}


	];

	constructor(private router: Router){		
	}
	ngOnInit() {
		this.slides = ['logo1.jpg', 'plantas1.jpg', 'plantas2.jpg', 'plantas3.jpg', 'sava.jpg'];
		
	}
	enviar(mensaje)
	{
		console.log(this.mensaje);
		this.mensaje=``;

	}
	enviar_planta(planta)
	{
		let navigationExtras: NavigationExtras = {
	      queryParams: {
	        special: JSON.stringify(planta)
	      }
	    };
	    console.log(navigationExtras);
	    this.router.navigate(['lista'], navigationExtras);
	}


}
