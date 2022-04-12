import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ShowrequestsComponent } from './showrequests/showrequests.component';
import { ShowfriendsComponent } from './showfriends/showfriends.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},  
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'login', pathMatch:'full'},
  {path: 'footer', component: FooterComponent,canActivate: [AuthGuard]},
  {path: 'shouts', component:PostsComponent, canActivate: [AuthGuard]},
  {path: 'shouts/edit/:id', component:PostEditComponent, canActivate: [AuthGuard]},
  {path: 'showRequests', component:ShowrequestsComponent, canActivate: [AuthGuard]},
  {path: 'showUsers', component:ShowuserComponent, canActivate: [AuthGuard]},
  {path: 'showFriends', component:ShowfriendsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
