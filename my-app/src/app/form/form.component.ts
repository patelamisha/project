import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    [x: string]: any;
 
  myForm: FormGroup;
  @ViewChild('f') registerForm: NgForm;

  constructor(private fb: FormBuilder) {
    // use FormBuilder to create a form group
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      inputEmail: new FormControl('', Validators.required),
      inputPass: new FormControl('', Validators.maxLength(10)),
    });
  }
  ngOnInit() { }
    submitForm() {
      let credentials = this.myForm.value;
      console.log(credentials);
      this.routes.navigate(['/homepage']);
    }
  
}
