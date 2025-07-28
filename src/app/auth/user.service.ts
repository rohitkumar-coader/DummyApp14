import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
   // Create (POST)
  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  // Update (PUT)
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }

  // Delete (DELETE)
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
