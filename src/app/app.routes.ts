import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: "home-page",
        component: DashboardComponent
    },
    {
        path: "login-page",
        component: LoginComponent
    },
    {
        path: "user-page",
        component: UserManagementComponent
    },
    {
        path: "header-page",
        component: HeaderComponent
    },
    {
        path: "service-page",
        component: ServicesComponent
    },
    {
        path: "contact-page",
        component: ContactusComponent
    }
];
