import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { BooksComponent } from './library/books/books.component';
import { LibraryComponent } from './library/library.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'calc', loadChildren: () => import('./calculator-new/calculator-new.module').then(m => m.CalculatorNewModule) },
  { path: 'todos', component: TodosComponent },
  { path: 'library', component: LibraryComponent, children: [
    { path: 'books', component: BooksComponent },
    { path: 'details/:bookId', component: BookDetailsComponent }
  ]},
  { path: 'reg', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
