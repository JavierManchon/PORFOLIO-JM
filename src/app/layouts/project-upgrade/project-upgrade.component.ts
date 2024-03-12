import { Component } from '@angular/core';
import { HoverService } from 'src/app/services/hover.service';

@Component({
  selector: 'app-project-upgrade',
  templateUrl: './project-upgrade.component.html',
  styleUrls: ['./project-upgrade.component.css']
})
export class ProjectUpgradeComponent {
  expanded: boolean = false;
  externalURL: string = "https://upgradeclub-app-front.vercel.app/";

  constructor(private hoverService: HoverService) {}

  expandContent() {
    this.hoverService.setHovering(true);
  }

  shrinkContent() {
    this.hoverService.setHovering(false);
  }
}
