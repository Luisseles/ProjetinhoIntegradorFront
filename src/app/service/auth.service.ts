import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar',usuarioLogin)
  }
  cadastrar(user:User):Observable<User> {
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)
  }
  logado(){
    let ok: boolean=false
    if(environment.token != ''){
      ok=true
    }
    console.log(environment.token)
    return ok
  }
}
