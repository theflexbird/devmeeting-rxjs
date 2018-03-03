import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {

  @Input() public submitButtonText = 'Submit';
  public form: FormGroup;

  @Output() formSubmit = new EventEmitter();
  formSubmitSubject = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      sender: ['', Validators.required],
      timestamp: ['', Validators.required],
      body: ['', Validators.required],
    });

    this.formSubmitSubject
            .filter(() => this.form.valid)
            .map(() => this.form.value)
            .subscribe(this.formSubmit);
  }

}
