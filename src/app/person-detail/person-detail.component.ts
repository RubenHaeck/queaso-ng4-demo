import { Component, OnInit } from '@angular/core';
import { StateParams, Transition, StateService } from '@uirouter/angular';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    console.log(this.stateService.params['personId']);
  }

}
