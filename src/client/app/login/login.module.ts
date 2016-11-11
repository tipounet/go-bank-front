import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import {Authentication} from '../shared/services/Authentication.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [Authentication]
})
export class LoginModule { }
