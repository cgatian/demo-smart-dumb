import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SmartDumbView } from './views/smart-dumb/smart-dumb.view';
import { OneComponentView } from './views/one-component/one-component.view';
import { FeatureComponent } from './views/feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: 'one-component' },
  { path: 'one-component', component: OneComponentView },
  { path: 'feature-component', component: FeatureComponent },
  { path: 'smart-dumb', component: SmartDumbView },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {}
