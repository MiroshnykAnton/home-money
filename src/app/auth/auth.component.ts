import { Component, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { fadeStateTrigger } from "../shared/animations/fade.animation";

@Component({
  selector: 'wfm-auth',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger],
})
export class AuthComponent implements OnInit {
  @HostBinding('@fade') a = true;

  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  // constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}