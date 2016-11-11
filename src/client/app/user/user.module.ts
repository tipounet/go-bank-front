import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {UserComponent} from './user.component';
import {Authentication} from '../shared/services/Authentication.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [Authentication]
})
export class UserModule { }
