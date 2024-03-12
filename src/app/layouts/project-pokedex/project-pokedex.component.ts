import { Component } from '@angular/core';
import { HoverService } from 'src/app/services/hover.service';

@Component({
  selector: 'app-project-pokedex',
  templateUrl: './project-pokedex.component.html',
  styleUrls: ['./project-pokedex.component.css']
})
export class ProjectPokedexComponent {
  expanded: boolean = false;
  externalURL: string = "https://javimanchonpokedex.vercel.app/";

  constructor(private hoverService: HoverService) {}

  expandContent() {
    this.hoverService.setHovering(true);
    this.expanded = true;
  }

  shrinkContent() {
    this.hoverService.setHovering(false);
    this.expanded = false;
  }
}
