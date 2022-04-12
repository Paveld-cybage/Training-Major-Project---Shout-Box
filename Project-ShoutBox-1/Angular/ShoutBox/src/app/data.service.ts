import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/register', data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  loginUser(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/data');
  }

  sendRequest(data: any) {

    return this.httpClient.post('http://127.0.0.1:8000/api/request', data);

  }

  getRequestList(data: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getrequest/' + data);
  }

  addConnection(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addconnection', data)
  }

  deleteRequest(data: any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleterequest/' + data)
  }

  getFriendList(data: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getfriend/' + data);
  }

  getPostData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/posts');
  }

  insertData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addPost', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePost/' + id);
  }

  getDataId(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/post/' + id);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePost/' + id, data);
  }

}
