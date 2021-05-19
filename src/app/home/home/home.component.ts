import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
    console.log('here home');
    this.newService.Articles.subscribe(res => {
      console.log(res)
    });
  }

}
