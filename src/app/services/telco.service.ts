import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelcoService {

  constructor(private http: HttpClient) { }

  private URL = "https://swapi.co/api/people";

  public sentData(dato1: any, dato2: any, dato3: any): Observable <any> {
    const data = {
      dato1: dato1,
      dato2: dato2,
      dato3: dato3
    }
    return this.http.post<any>(this.URL, data);
  }

  public getData(dato1: any):Observable <any> {
    return this.http.get<any>(this.URL+'/'+dato1);
  }

}
