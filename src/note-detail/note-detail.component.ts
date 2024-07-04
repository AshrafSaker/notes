import { Component,inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {

}
