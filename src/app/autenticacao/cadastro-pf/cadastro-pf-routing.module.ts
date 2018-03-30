import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	CadastroPfComponent, 
	CadastrarPfComponent 
} from './components';

export const CadastroPfRoutes: Routes = [
	{
		path: 'cadastro-pf',
		component: CadastroPfComponent,
		children: [
		  {
			path: '', 
			component: CadastrarPfComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroPfRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPfRoutingModule {
}


