import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {MessageFormComponent} from './message-form/message-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MessageRepository} from "./MessageRepository";


@NgModule({
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'rxjslab')
  ],
  declarations: [AppComponent, MessageFormComponent],
  providers: [MessageRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
