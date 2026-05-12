/*
import {NgxIndexedDBModule, DBConfig} from 'ngx-indexed-db';
import {NgModule} from '@angular/core';
import {App} from './app';
import {BrowserModule} from '@angular/platform-browser';

const dbConfig: DBConfig = {
  name: "Scrollsmith Database",
  version: 1,
  objectStoresMeta: [
    {
      store: 'scrolls',
      storeConfig: {keyPath: 'id', autoIncrement: true},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: false}},
        {name: 'icon', keypath: 'icon', options: {unique: false}},
        {name: 'position', keypath: 'position', options: {unique: false}},
      ]
    }
  ]
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    App,
  ],
  bootstrap: []
}) export class AppModule { }

 */

import {inject, Injectable, Injector} from '@angular/core';
import {ContextMenu} from './desk/components/desk-field/components/context-menu/context-menu';

@Injectable({
  providedIn: 'root'
})
export class DBConfig {
  idb = window.indexedDB;
  storeName = 'scrolls';
  idbReq = this.idb.open(this.storeName, 1);
  db!:IDBDatabase;
  dbCreated:boolean = false;

  constructor() {

  }

  async orderer() {
    await this.initDB();
    this.dbCreated = true;
    await this.addData({
      name: 'test',
      icon: '',
      position: {
        x: 0,
        y: 0
      }
    });

  }

  async initDB(){
    if (this.idbReq) {
      if (this.idbReq.onerror) {
        this.idbReq.onerror = (e)=> {
          console.error(e);
        };
      }

      this.idbReq.onupgradeneeded = () => {
        this.db = this.idbReq.result;
        const store = this.db.createObjectStore(this.storeName, {keyPath: 'id'});
        store.createIndex('name', 'name', {unique: false});
      };

      this.idbReq.onsuccess = (e) => {
        this.db = this.idbReq.result;
        const transaction = this.db.transaction(this.storeName, 'readwrite');
        const store = transaction.objectStore(this.storeName);
        const nameIndex = store.index('name');
      }
    }
  }

  addData(data: any): Promise<number> | null {
    if (!this.db) {
      return Promise.reject(new Error('DB not initialized'));
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(data);
      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
    return null;
  }
}


