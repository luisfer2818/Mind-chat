import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-ticket',
  templateUrl: './modal-add-ticket.component.html',
  styleUrls: ['./modal-add-ticket.component.scss'],
})
export class ModalAddTicketComponent implements OnInit {
  titulo = new FormControl('', [Validators.required]);
  departamento = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.titulo.hasError('required')) {
      return 'Digite um valor válido.';
    }

    return this.titulo.hasError('titulo') ? 'Digite um titulo' : '';
  }
}
