import { Component } from '@angular/core';
import { HoverService } from 'src/app/services/hover.service';

@Component({
  selector: 'app-project-gamevault',
  templateUrl: './project-gamevault.component.html',
  styleUrls: ['./project-gamevault.component.css']
})
export class ProjectGamevaultComponent {

  expanded: boolean = false;
  externalURL: string = "https://front-proyecto-react.vercel.app/"

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
