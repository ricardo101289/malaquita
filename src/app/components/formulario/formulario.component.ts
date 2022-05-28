import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import  '../../../assets/smtp/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  contactForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      telefono: [''],
      mensaje: [''],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }

}
