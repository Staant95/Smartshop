import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {of, Observable, merge} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private tempArrayOfObservables = [];
  constructor(private storage: Storage) { }

  save(items: object): Observable<any> {
    for(let key in items) {
      this.tempArrayOfObservables.push(
          of(this.storage.set(key, items[key]))
      );
    }

    return merge(...this.tempArrayOfObservables)

  }
}
