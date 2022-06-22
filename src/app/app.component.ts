import {Component} from '@angular/core';
import {ThemingService} from "@fundamental-ngx/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

const isHcb = (theme: string | undefined) => theme?.includes('hcb') || theme?.includes('hcw');
const isHorizon = (theme: string | undefined) => theme?.includes('horizon');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-theming';
  themes = this._themingService.getThemes();

  additionalCss!: SafeResourceUrl;

  constructor(private _themingService: ThemingService, private _sanitizer: DomSanitizer) {
    this._themingService.init();

    this._themingService.currentTheme.subscribe((theme) => {
      const themeName = isHorizon(theme?.id) ? 'horizon' : 'fiori';
      const highContrast = isHcb(theme?.id);
      this.additionalCss = this._sanitizer.bypassSecurityTrustResourceUrl(`sap_${themeName}${highContrast ? '_hc' : ''}_overrides.css`);
    });
  }
  selectTheme(selectedTheme: string): void {
    this._themingService.setTheme(selectedTheme);
  }
}
