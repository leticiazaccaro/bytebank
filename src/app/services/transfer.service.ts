import { Transfer } from './../models/transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transferences';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transferences() {
    return this.transferList;
  }

  allTransferences(): Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url);
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    this.handleData(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  private handleData(transfer: any) {
    transfer.date = new Date();
  }
}
