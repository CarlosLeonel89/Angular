import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { MainComponent } from './admin/main/main.component';
import { PostComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: "Home page", data: { pageRouteName: 'Home page' }
  },
  {
    path: 'admin', component: MainComponent, title: "Main", canActivate: [AuthGuard]
  },
  {
    path: 'about', component: AboutComponent, title: "About"
  },
  {
    path: 'dashboard', component: DashboardComponent, title: "Dashboard"
  },
  {
    path: 'login', component: LoginComponent, title: "Login"
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home', data: { pageRouteName: 'Home page' }
  },
  {
    path: 'posts', component: PostComponent, title: "Posts"
  },
  {
    path: 'comments', component: CommentsComponent, title: "Comments"
  },
  {
    path: '**', component: NotfoundComponent, title: "Not found"
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
