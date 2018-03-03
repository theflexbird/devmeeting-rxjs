import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Model } from './message.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class MessageService {
  messages: Observable<Model[]>;
  private collection: AngularFirestoreCollection<Model>;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Model>('messages', ref => ref.orderBy('timestamp'));
    this.messages = this.collection.valueChanges().catch((error, source$) => {
      console.error('Oops:', error.message);
      return Observable.of([]);
    });
  }

  add(message: Model) {
    this.collection.add({...message});
  }
}
