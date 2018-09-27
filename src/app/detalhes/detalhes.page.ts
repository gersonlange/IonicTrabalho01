import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  data: any;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.service
    .getDados('dados/' + this.service.id)
    .subscribe(data => {
      this.data = data.json();
      console.log(this.data);
    });

  }

}
