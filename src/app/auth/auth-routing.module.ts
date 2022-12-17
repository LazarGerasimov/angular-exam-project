import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";


const routes:Routes = [
    {
        path:'auth/login',
        component:LoginComponent,
        canActivate: [AuthGuard],
        data: {
            'guest': true
        }

    },
    {
        path:'auth/register',
        component:RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            'guest': true
        }
    },
    {
        path:'auth/logout',
        component:LogoutComponent,
        canActivate: [AuthGuard],
        data: {
            'guest': false
        }
    },
    {
        path:'auth/profile',
        component:ProfileComponent
    }
]

export const AuthRoutingModule = RouterModule.forChild(routes)