import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter,Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  { path: '', component:NotesListComponent  },
  { path: 'New', component:AddNoteComponent  },

]

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
