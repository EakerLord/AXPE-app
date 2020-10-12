import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { ShipsService } from '../../Servicies/ships.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  currentUser: User = null;

  constructor(private ships: ShipsService) { }

  ngOnInit(): void {
      // this.ships.getData()
      // .subscribe(data => {
      //   console.log(data);
      // });
  }
}
