import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL} from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class UtentiListaService {

  constructor(private http: HttpClient) { }

  getAllUser(cardId: number) {
    return this.http.get(`${URL.usersOfCard} ${cardId}`);
  }
}
