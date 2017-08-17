import { Component, OnInit } from '@angular/core';

import { Person } from './../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons: Array<Person> = [
    {
      id: 1,
      name: 'Haeck',
      firstName: 'Ruben',
      title: 'Mr'
    },
    {
      id: 2,
      name: 'Dedecker',
      firstName: 'Astrid',
      title: 'Mrs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
