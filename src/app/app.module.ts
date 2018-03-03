import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'rxjslab'),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MessageService
  ],
  declarations: [ AppComponent, ChatFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
