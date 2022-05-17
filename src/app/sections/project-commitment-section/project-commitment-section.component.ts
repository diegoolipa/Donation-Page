import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbCalendar, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-commitment-section',
  templateUrl: './project-commitment-section.component.html',
  styleUrls: ['./project-commitment-section.component.css']
})
export class ProjectCommitmentSectionComponent implements OnInit {

  closeResult: string;

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor(private modalService: NgbModal, calendar: NgbCalendar) { }
  project_all: any = [
    {
      id: 1,
      name: 'Donación Lite',
      cost: 300.00,
      type: 1
    },
    {
      id: 2,
      name: 'Donación Básica',
      cost: 1000.00,
      type: 1
    },
    {
      id: 3,
      name: 'Donación Premium',
      cost: 10000.00,
      type: 1
    },
    {
      id: 4,
      name: 'Donación Vip',
      cost: 100000.00,
      type: 1
    },
    {
      id: 5,
      name: 'Donación Voluntaria',
      cost: 0,
      type: 2
    }
  ];

  ngOnInit(): void {
  }

  open(content, type, modalDimension,cost) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content,{ centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
