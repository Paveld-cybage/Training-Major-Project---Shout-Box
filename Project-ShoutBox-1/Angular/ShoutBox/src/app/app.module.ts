import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ShowuserComponent } from './showuser/showuser.component';
import { ShowrequestsComponent } from './showrequests/showrequests.component';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowfriendsComponent } from './showfriends/showfriends.component';
import { NgToastModule } from 'ng-angular-popup';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ShowuserComponent,
    ShowrequestsComponent,
    PostsComponent,
    PostEditComponent,
    NavbarComponent,
    ShowfriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
    
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
