import { Component } from '@angular/core';
import { HoverService } from 'src/app/services/hover.service';

@Component({
  selector: 'app-project-upcode',
  templateUrl: './project-upcode.component.html',
  styleUrls: ['./project-upcode.component.css']
})
export class ProjectUpcodeComponent {
  expanded: boolean = false;
  externalURL: string = "https://upcode-app-front.vercel.app/";

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
