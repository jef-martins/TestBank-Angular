import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-conta',
  templateUrl: './add-conta.component.html',
  styleUrls: ['./add-conta.component.css']
})
export class AddContaComponent implements OnInit {

  check: boolean = false;
  cor = "danger";
  log = false;
  repete = '';
  versenha = false;

  usuario: Usuario = {
    nome: '',
    cpf: '',
    senha: '',
    tipoConta: 'Conta Corrente'
  }

  constructor(private loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {
  }

  convertBase64(fileParam: File) {
    const file = new Blob([fileParam], { type: 'image/jpeg' });

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async convertFoto(e: any) {
    this.usuario.foto = await this.convertBase64(e.target.files[0]);
    console.log(this.usuario.foto);
  }

  tipoconta(e: any) {
    this.usuario.tipoConta = e.target.value;
  }

  verifica(): boolean {
    const user = this.usuario;
    if (user.nome && user.cpf && user.senha && this.repete && this.check) {
      return true;
    }
    else
      return false;
  }

  save() {
    this.verSenha();
    if (this.verifica()) {
      if (!this.versenha)
        this.loginService.createUsuario(this.usuario).subscribe(res => {
          alert("Usuario " + res.nome + " Cadastrado com Sucesso");
          this._route.navigate(['login']);
        });
      else
        this.log = false;
    }
    else
      this.log = true;
  }

  cancelar() {
    this._route.navigate(['login']);
  }

  checkBox() {
    if (this.check)
      this.cor = "success";
    else
      this.cor = "danger";
  }

  verSenha() {
    if (this.repete !== this.usuario.senha)
      this.versenha = true;
    else
      this.versenha = false;
  }

}
