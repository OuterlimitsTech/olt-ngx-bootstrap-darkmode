import { Component } from '@angular/core';
import { Sizes, ThemeService } from 'ngx-bootstrap-darkmode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  sizes = [undefined, null, 'bogus', 'sm', 'md', 'lg', Sizes.sm, Sizes.md, Sizes.lg];
  size2: Sizes = Sizes.sm;

  constructor(public themeService: ThemeService) { }
}
