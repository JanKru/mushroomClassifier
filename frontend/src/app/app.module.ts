import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** components */
import { SignInComponent } from './modules/authentication/commponents/sign-in/sign-in.component';
/** routes */
import { routes } from './app.routes';
/** guards & interceptor */
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { AuthenticationInterceptor } from './shared/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // add as last for '' and '**' navigation
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true}, AuthenticationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
