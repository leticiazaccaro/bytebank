import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transferences: any[] = [];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.service.allTransferences().subscribe((transferences: Transfer[]) => {
      console.table(transferences);
      this.transferences = transferences;
    });
  }

}
