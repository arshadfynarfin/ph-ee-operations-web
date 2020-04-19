/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Payment HUB component.
 */
@Component({
  selector: 'mifosx-paymenthubee',
  templateUrl: './paymenthub.component.html',
  styleUrls: ['./paymenthub.component.scss']
})
export class PaymentHubComponent implements OnInit {
  static getDFSPId() {
    return 'in01tn01';
  }

  constructor() { }

  ngOnInit() {
  }

}
