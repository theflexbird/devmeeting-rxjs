import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {List} from 'immutable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {map, tap, mapTo, take, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Message} from './Message';

@Injectable()
export class MessageRepository {
  private messageList = this.db.collection<Message>('/messages');

  messageList$ = this.messageList.valueChanges().pipe(
    map(messages => messages.map(
      m => new Message(m)
    )),
    map(List)
  );

  constructor(private db: AngularFirestore) {
  }

  public getAll(): Observable<List<Message>> {
    return this.messageList$.pipe(take(1));
  }

  public add(message: Message): Observable<Message> {
    return fromPromise(this.messageList.add(message)).pipe(
      mergeMap(docRef => docRef.get()),
      map(doc => doc.data()),
      map(m => new Message(m))
    );
  }
}
