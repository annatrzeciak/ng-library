import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from '../shared-module/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class CoreModuleModule { }
