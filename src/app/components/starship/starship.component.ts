import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import { ShipsService } from '../../Servicies/ships.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  currentUser: User = null;

  constructor(private ships: ShipsService, private router: Router) { }

  ngOnInit(): void {
    if (!JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/login']);
    } else {
      // this.ships.getData()
      // .subscribe(data => {
      //   console.log(data);
      // });
    }
  }
}
