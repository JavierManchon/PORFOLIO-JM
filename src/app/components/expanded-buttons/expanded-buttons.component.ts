import { Component, Input } from '@angular/core';
import { HoverService } from 'src/app/services/hover.service';

@Component({
  selector: 'app-expanded-buttons',
  templateUrl: './expanded-buttons.component.html',
  styleUrls: ['./expanded-buttons.component.css']
})
export class ExpandedButtonsComponent {

  @Input() projectName: string = "";
  @Input() externalURL: string = "";

  expanded: boolean = false;

  constructor(private hoverService: HoverService) {}

  expandContent() {
    this.hoverService.setHovering(true);
    this.expanded = true;
  }

  shrinkContent() {
    this.hoverService.setHovering(false);
    this.expanded = false;
  }

  redirectToExternalURL() {
    window.open(this.externalURL, '_blank');
  }
}
