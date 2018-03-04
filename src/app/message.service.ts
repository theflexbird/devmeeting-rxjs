import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Model } from './message.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

@Injectable()
export class MessageService {
  messages: Observable<Model[]>;
  private collection: AngularFirestoreCollection<Model>;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Model>('messages', ref => ref.orderBy('timestamp'));
    this.messages = this.collection.valueChanges()
    .retry(5)
    .catch((error) => {
      console.error('Oops:', error.message);
      return Observable.of([]);
    });
  }

  add(message: Model) {
    this.collection.add({...message});
  }
}
