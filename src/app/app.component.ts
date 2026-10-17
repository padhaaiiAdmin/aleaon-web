import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer.component';
import { HeaderComponent } from './shared/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <app-header />
    <main id="main"><router-outlet /></main>
    <app-footer />
  `,
  styles: `
    .skip {
      position: absolute; left: 16px; top: -60px; z-index: 100; padding: 10px 16px; border-radius: 8px;
      background: var(--indigo-950); color: #fff; text-decoration: none;
    }
    .skip:focus { top: 12px; }
  `,
})
export class AppComponent {}
