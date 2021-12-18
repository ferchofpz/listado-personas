import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService{
    token: string = '';
    auth: Auth;

    constructor(
        private router:Router
    ){}

    login(email:string, password:string){
        this.auth = getAuth();
        signInWithEmailAndPassword(this.auth,email, password).then
        (
            response => {
                response.user.getIdToken().then(
                    token => {
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != '';
    }

    logout(){
        this.auth.signOut().then(
            () => {
                this.token = '';
                this.router.navigate(['login']);
            }
        ).catch(error => console.log("Error logout: " + error));
    }
}