import { BookRoutingModule } from './books/book-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { HttpModule } from '@angular/http';
import { CoreModuleModule } from './core-module/core-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
    BookRoutingModule,
    CoreModuleModule,
    HttpModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
