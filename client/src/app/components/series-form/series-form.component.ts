import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.css']
})
export class SeriesFormComponent implements OnInit {

  notFound = false;
  serie: Serie

  constructor(private SeriesService: SeriesService) { }

  ngOnInit() {
  }

  getSerie(serieId: string) {
    this.notFound = false;
    this.serie = null;

    this.SeriesService.getSerie(serieId).subscribe((serieFromTheAPI: Serie) => {
        this.serie = serieFromTheAPI;
      }, (err: any) => {
        console.error(err);
        this.notFound = true;
    });
  }

}
