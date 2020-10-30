import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { RegisterComponent } from './register/register.component';

// feature module
// import { CalculatorNewModule } from './calculator-new/calculator-new.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CalculatorNewModule,
    CommonUtilitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
