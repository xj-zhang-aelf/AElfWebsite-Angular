import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './foot.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', `.json?${(new Date()).getTime()}`);
}

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [Footer],
  exports: [
    Footer
  ]
})
export class FooterModule { }
