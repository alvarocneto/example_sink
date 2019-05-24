import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleNormalComponent } from './example-normal/example-normal.component';
import { ExampleSubsinkComponent } from './example-subsink/example-subsink.component';
import { ExampleSyncComponent } from './example-sync/example-sync.component';

const routes: Routes = [
  { path: 'sync', component: ExampleSyncComponent },
  { path: 'normal', component: ExampleNormalComponent },
  { path: 'subsink', component: ExampleSubsinkComponent },
  { path: '', pathMatch: 'full', redirectTo: 'normal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
