import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './view/todo/todo.component';
import { CounterComponent } from './view/counter/counter.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  // { path: '', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
