import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../interfaces/user';
import { LanguageResult } from '../interfaces/language';
import { PostResult } from '../interfaces/post';
import { CommentsResult } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }

  getUsers() {
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
  }

  getLanguages() {
    return this.http.get<LanguageResult>("http://localhost:3000/languages");
  }
  getPosts() {
    return this.http.get<PostResult>("http://localhost:3000/posts");
  }
  getComments(id: number) {
    return this.http.get<CommentsResult>("http://localhost:3000/comments/" + id);
  }
}
