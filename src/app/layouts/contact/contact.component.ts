import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  sendEmail() {
    const email = 'javiermanchongarcia@gmail.com';
    
    const direccionCorreo = encodeURIComponent(email);

    //const uri = `mailto:${direccionCorreo}`;
    
    window.open(`mailto:${direccionCorreo}`, '_blank');
  }

}
