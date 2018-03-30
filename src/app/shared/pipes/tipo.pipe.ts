import { Pipe, PipeTransform } from '@angular/core';

import { Tipo } from '../models';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: Tipo, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: Tipo): string {
  	let tipoDesc: string;
  	switch (tipo) {
  		case Tipo.INICIO_TRABALHO:
  			tipoDesc = 'Início do trabalho';
  			break;
  		case Tipo.INICIO_ALMOCO:
  			tipoDesc = 'Início do almoço';
  			break;
  		case Tipo.TERMINO_ALMOCO:
  			tipoDesc = 'Término do almoço';
  			break;
  		case Tipo.TERMINO_TRABALHO:
  			tipoDesc = 'Término do trabalho';
  			break;
  		default:
  			tipoDesc = tipo;
  			break;
  	}
  	return tipoDesc;
  }

}
