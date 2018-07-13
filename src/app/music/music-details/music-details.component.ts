import { Component, Input} from "@angular/core";

@Component({
  selector: 'music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./musi-details.component.css']
})

export class MusicDetailsComponent {
  @Input() title: string;
}
