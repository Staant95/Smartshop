import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import { Observable, from } from "rxjs";
import { map, mergeAll } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  save(items: object): Observable<any> {
    return from(Object.keys(items)).pipe(
        map(key => this.storage.set(key, items[key])),
        mergeAll()
    );
  }

}
