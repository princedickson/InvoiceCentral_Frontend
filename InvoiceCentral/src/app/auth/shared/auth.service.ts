import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { 
  }
  onSubmit(registerRequestPayload: any): any {
    return this.httpClient.post('http://localhost:8080/api/v1/register', registerRequestPayload, {responseType: 'text'});
  }
}
