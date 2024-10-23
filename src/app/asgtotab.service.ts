import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AsgtotabService {
  private itemSelected: any;


  constructor(private http: HttpClient) { }

  fetchData(): Observable<any>{
    return this.http.get('/assets/data/catalogues.json')
  }

  setitemSelected(item: any){
    this.itemSelected = item;
  }

  getitemSelected(){
    return this.itemSelected;
  }
}

