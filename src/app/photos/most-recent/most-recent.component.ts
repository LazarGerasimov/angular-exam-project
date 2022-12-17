import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.scss']
})
export class MostRecentComponent implements OnInit {

  mostRecent: IPhoto[] | null = null

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRecent().subscribe({
      next: (value) => {
        this.mostRecent = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
