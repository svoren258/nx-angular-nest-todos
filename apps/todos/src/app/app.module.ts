import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalStoreModule } from '@todos/store';
import { UiModule } from '@todos/ui';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { AppComponent } from './app.component';
import { UnorderedListOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ UnorderedListOutline ];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, GlobalStoreModule, HttpClientModule, UiModule, NzButtonModule, NzLayoutModule, NzIconModule.forRoot(icons), NzTypographyModule, NzFormModule, ReactiveFormsModule, NzInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
