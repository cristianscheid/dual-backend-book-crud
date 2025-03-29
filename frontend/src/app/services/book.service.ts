import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    const storedApiUrl = localStorage.getItem('apiUrl');
    if (storedApiUrl) {
      this.apiUrl = storedApiUrl;
    } else {
      this.apiUrl = environment.apiLaravel;
    }
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  setApiUrl(apiChoice: string): void {
    switch (apiChoice) {
      case 'laravel':
        this.apiUrl = environment.apiLaravel;
        break;
      case 'node':
        this.apiUrl = environment.apiNodeExpress;
        break;
      default:
        break;
    }
    localStorage.setItem('apiUrl', this.apiUrl);
  }

  test(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  findByTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}?title=${title}`);
  }

  get(id: any): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
