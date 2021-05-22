import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = ['assets/carousel-one', 'assets/carousel-two', 'assets/carousel-three'];
  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    custom: 'banner',
    loop: true,
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    vertical: {
      enabled: false,
      height: 400
    }
  };
  tempData: any[];
  public carouselTileItems$: Observable<string[]>;
  ngOnInit(): void {
    this.tempData = [];

    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map((val, i) => {
        // const data = (this.images = [
        //   ...this.images,
        //   this.images[i]
        // ]);
        return [this.images[0]];
      })
    );
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: any): void {
    console.log(data);
  }
}
