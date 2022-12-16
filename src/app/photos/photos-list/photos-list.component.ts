import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { IPhoto } from '../../shared/interfaces';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit {

  photosList: IPhoto[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPhotos().subscribe({
      next: (value) => {
        this.photosList = value
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
