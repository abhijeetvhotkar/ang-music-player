// Third party imports
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
// PrimeNG autocomplete for search
import { AutoCompleteModule } from 'primeng/primeng';

// Custom imports
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';


@NgModule({
  imports: [
    FormsModule,
    AutoCompleteModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    //Expose components
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicSearchComponent
  ],
  declarations: [
    //Declare Components
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicSearchComponent
  ],
  providers: [
    //Services
    ApiService,
    MusicService
  ]
})

export class MusicModule {}
