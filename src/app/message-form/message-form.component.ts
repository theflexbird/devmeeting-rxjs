import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input() public submitButtonText = 'Submit';
  public form: FormGroup;

  @Output() formSubmit = new EventEmitter();
  formSubmitSubject = new Subject();

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      sender: ['', Validators.required],
      body: ['', Validators.required],
    });

    this.formSubmitSubject
      .filter(() => this.form.valid)
      .map(() => this.form.value)
      .subscribe(this.formSubmit);

  }
}
