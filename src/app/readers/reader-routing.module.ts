import { ReaderResolve } from './reader-resolve.service';
import { ReaderDetailsComponent } from './../readers/reader-details/reader-details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';



const READERS_ROOTS: Route[] = [
    { path: 'readers/:id', component: ReaderDetailsComponent, resolve: { reader: ReaderResolve } }


];

@NgModule({
    imports: [RouterModule.forChild(READERS_ROOTS)],
    exports: [RouterModule]
})
export class ReadersRoutingModule { }