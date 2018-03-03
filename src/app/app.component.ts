import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFirestore} from "angularfire2/firestore";
import {Message} from "./Message";
import {MessageRepository} from "./MessageRepository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repo: MessageRepository;
  title = 'app';
  items: Observable<any[]>;

  constructor(db: AngularFirestore, repo: MessageRepository) {
    this.items = db.collection('/messages', ref => ref.orderBy('timestamp')).valueChanges();
    this.repo = repo;
  }

  sendMessage(message: Message) {
    console.log(message);
    message.timestamp = new Date();
    this.repo.add(message);
  }
}
