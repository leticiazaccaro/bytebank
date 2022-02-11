import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferService) {}

  transfer() {
    console.log('Solicitada nova transferência!');

    const valueEmit: Transfer = { value: this.value, destiny: this.destiny };
    this.service.addTransfer(valueEmit).subscribe(
      (result) => {
        console.log(result);
        this.clearFields();
      },
      (error) => console.log(error)
    );
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
