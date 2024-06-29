
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../header/header.component'
import { NotesListComponent } from '../notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NotesListComponent,FormsModule,AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';

}
