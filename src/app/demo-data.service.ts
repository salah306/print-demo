import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class DemoDataService {

  constructor(private http: Http) {}
  
      getData() {
          return this.http.get('./assets/data/data.json')
                      .toPromise()
                      .then(res => <DemoData[]> res.json().data)
                      .then(data => { return data; });
      }
}


export interface Reciever {
    name: string;
    address1: string;
    address2: string;
    phone: string;
    suburb: string;
}

export interface Sender {
    name: string;
    address1: string;
    address2: string;
    phone: string;
    suburb: string;
}

export interface Item {
    count: number;
    weight: number;
    reference: string;
    ItemReference: number;
    instructions: string;
    type: string;
}

export interface DemoData {
    _id: string;
    name: string;
    company: string;
    noId: string;
    date: string;
    reciever: Reciever;
    sender: Sender;
    item: Item;
}