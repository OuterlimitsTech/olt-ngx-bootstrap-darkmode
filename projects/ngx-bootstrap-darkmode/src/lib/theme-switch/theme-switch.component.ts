import { Component, Input, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { ThemeService } from '../theme.service';

export enum Sizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export enum Styles {
  icon = 'icon',
  label = 'label'
}

/**
 * A tri-state toggle button for switching between `light`, `auto` and `dark` theme.
 * Size and style (icon vs label) are configurable.
 */
@Component({
  selector: 'olt-ngbd-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  theme$!: Subject<string | null>;

  /**
   * The size of the toggle button.
   *
   * - `sm` and `lg` translate to Bootstrap's `.btn-sm` and `.btn-lg`, respectively.
   * - `md` is the default and translates to just `.btn`.
   *
   * @see https://getbootstrap.com/docs/5.2/components/buttons/#sizes
   */
  @Input() size: Sizes | string | null | undefined = Sizes.md;

  /**
   * The style of the button labels.
   *
   * - `icon` is the default and displays the Octicons for sun (light mode), telescope (auto mode) and moon (dark mode),
   * while also adding invisible text for screen readers.
   * - `label` uses textual labels instead (Light, Auto, Dark).
   *
   * @see https://primer.style/octicons/sun-16
   * @see https://primer.style/octicons/telescope-16
   * @see https://primer.style/octicons/moon-16
   */
  @Input() style: Styles | string | null | undefined = null;

  constructor(
    private themeService: ThemeService,
  ) {
  }

  ngOnInit() {
    this.theme$ = this.themeService.theme$;
  }
}
