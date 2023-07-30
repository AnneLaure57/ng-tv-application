import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {

  constructor() { }

  saveData(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string) {
    const item = localStorage.getItem(key);
    return item == null ? [] : JSON.parse(item) as T;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }
}
