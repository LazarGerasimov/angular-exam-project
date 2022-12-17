import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-most-expensive',
  templateUrl: './most-expensive.component.html',
  styleUrls: ['./most-expensive.component.scss']
})
export class MostExpensiveComponent implements OnInit {

  mostExpensive: IPhoto[] | null = null;

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMostExpensive().subscribe({
      next: (value) => {
        this.mostExpensive = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
