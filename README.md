## This library was copied from [https://github.com/Clashsoft/ng-bootstrap-darkmode](https://github.com/Clashsoft/ng-bootstrap-darkmode)

An Angular wrapper for [bootstrap-darkmode](https://github.com/Clashsoft/bootstrap-darkmode).

NOTE: It appears this library is only being maintained when a new version of bootstrap-darkmode is released

## Installation

Install the module:

```sh
$ npm install @outerlimitstech/ngx-bootstrap-darkmode bootstrap-darkmode
```

Include darkmode css (in `styles.scss`):

```scss
@import "~bootstrap-darkmode/scss/darktheme";
```

Alternatively, if you are not using SCSS, add the following in `angular.json` under `projects.<yourProject>.architect.build.options.styles`:

```json5
"styles": [
  // ...
  "../node_modules/bootstrap-darkmode/dist/darktheme.css"
]
```

## Usage

### Module Import

```typescript
import { NgBootstrapDarkmodeModule } from "ng-bootstrap-darkmode";

@NgModule({
  imports: [
    // ...
    NgBootstrapDarkmodeModule,
  ],
  // ...
})
export class AppModule {}
```

### Theme Switcher

To include the theme switcher, which allows selections between light, dark and automatic (user agent preference) mode:

```html
<olt-ngbd-theme-switch></olt-ngbd-theme-switch>
```

The theme switcher can be customized with the optional `[size]` and `[style]` attributes:

```html
<olt-ngbd-theme-switch size="sm"></olt-ngbd-theme-switch>
<olt-ngbd-theme-switch size="md"></olt-ngbd-theme-switch>
<olt-ngbd-theme-switch size="lg"></olt-ngbd-theme-switch>
<olt-ngbd-theme-switch
  [size]="userPrefersLargeElements ? 'lg' : 'md'"
></olt-ngbd-theme-switch>

<olt-ngbd-theme-switch style="icon"></olt-ngbd-theme-switch>
<olt-ngbd-theme-switch style="label"></olt-ngbd-theme-switch>
<olt-ngbd-theme-switch
  [style]="userPrefersLabelsOverIcons ? 'label' : 'icon'"
></olt-ngbd-theme-switch>
```

### Subscribing to the Theme

```typescript
import { ThemeService } from "ng-bootstrap-darkmode";

@Injectable()
export class MyService {
  constructor(themeService: ThemeService) {
    themeService.theme$.subscribe((theme) => console.log(theme));
  }
}
```

### Configuring Persistence

By default, this library persists the currently selected theme using the key `theme` in `localStorage`.
You can customize how this behaviour using dependency injection.
Just provide the `THEME_SAVER` and `THEME_LOADER` functions in your module:

```typescript
import { of } from "rxjs";

import {
  NgxBootstrapDarkmodeModule,
  THEME_LOADER,
  THEME_SAVER,
} from "@outerlimitstech/ngx-bootstrap-darkmode";

@NgModule({
  imports: [
    // ...
    NgxBootstrapDarkmodeModule,
  ],
  providers: [
    {
      provide: THEME_LOADER,
      useValue: () => of("light"),
    },
    {
      provide: THEME_SAVER,
      useValue: (theme) => console.log("saving", theme),
    },
  ],
  // ...
})
export class AppModule {}
```
