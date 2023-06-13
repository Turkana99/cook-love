import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  id: string | null | undefined;
  constructor(public router: Router, public route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(params);
    });
  }
}
