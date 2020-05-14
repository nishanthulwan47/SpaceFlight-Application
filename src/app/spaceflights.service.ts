import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { promise } from 'protractor';
import {User} from './spaceflight/User';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SpaceflightsService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getArticles(): Observable<any> {
    return this.http.get('https://launchlibrary.net/1.4/launch/next/50');
  }

  getArticlesById(id) {
    return this.http.get('https://launchlibrary.net/1.4/launch/' + id);
  }

  createUserDetails(email: string, username: string, status: boolean, joinedDate: number) {
    const user = new User(email, username, status, joinedDate);
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('UserDetails')
      .add({...user})
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }
}
