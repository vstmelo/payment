import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    getData(){
        return[
            {
                id: 1,
                cliente: 'João',
                valor: '53.000',
            },
            {
                id: 2,
                cliente: 'Jão',
                valor: '53.00',
            },
            {
                id: 3,
                cliente: 'Joã',
                valor: '53.00',
            },
            {
                id: 4,
                cliente: 'Joo',
                valor: '53',
            },
            
        ]
    }
    getDatas(){
        return Promise.resolve(this.getData());
    }
}