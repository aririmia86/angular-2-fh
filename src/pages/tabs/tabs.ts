import { Component } from '@angular/core';

import { PendienteComponent } from '../pendientes/pendientes.component';
import { TerminadoComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendienteComponent;
  tab2Root = TerminadoComponent;

  constructor() {

  }
}
