import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.scss']
})
export class DisplayErrorComponent implements OnInit {

  msg: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Error: ');
    this.route.paramMap.subscribe(params => {
      this.msg = params.get('msg');
    });
  }
}
