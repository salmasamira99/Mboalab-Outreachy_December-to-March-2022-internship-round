import { Component, Input } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { HelperService } from '../../helper/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService {
  constructor(core: CoreService) {
    super(core)
  }
}
