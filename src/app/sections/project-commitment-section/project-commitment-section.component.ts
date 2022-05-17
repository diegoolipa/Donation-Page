import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-commitment-section',
  templateUrl: './project-commitment-section.component.html',
  styleUrls: ['./project-commitment-section.component.css']
})
export class ProjectCommitmentSectionComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


  project_all: any = [
    {
      id: 1,
      name: "Donación Lite",
      cost: 300.00
    },
    {
      id: 2,
      name: "Donación Básica",
      cost: 1000.00
    },
    {
      id: 3,
      name: "Donación Premium",
      cost: 10000.00
    },
    {
      id: 4,
      name: "Donación Vip",
      cost: 100000.00
    },
    {
      id: 5,
      name: "Donación Voluntaria",
      cost: 0
    }
  ]

}
