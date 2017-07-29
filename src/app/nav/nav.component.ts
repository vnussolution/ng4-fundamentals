import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service'

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthService) { }


  ngOnInit() {
  }

}
