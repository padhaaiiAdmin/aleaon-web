import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Framed product screenshot. Pass `src` once real screenshots are in
 * public/screens/; until then a labelled placeholder is shown.
 */
@Component({
  selector: 'app-screenshot',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="frame" [class.frame--phone]="device() === 'phone'">
      @if (device() === 'desktop') {
        <div class="chrome" aria-hidden="true">
          <span></span><span></span><span></span>
          <div class="url">{{ url() }}</div>
        </div>
      }
      <div class="screen" [style.aspect-ratio]="device() === 'phone' ? '9 / 19' : '16 / 10'">
        @if (src()) {
          <img [src]="src()" [alt]="alt()" [attr.loading]="eager() ? null : 'lazy'" decoding="async" />
        } @else {
          <div class="placeholder">
            <span class="ph-label">Screenshot</span>
            <span class="ph-name">{{ alt() }}</span>
          </div>
        }
      </div>
    </figure>
  `,
  styles: `
    :host { display: block; }
    .frame {
      margin: 0; background: var(--white); border-radius: 14px; overflow: hidden;
      border: 1px solid var(--slate-200); box-shadow: var(--shadow-lg);
    }
    .chrome {
      display: flex; align-items: center; gap: 6px; padding: 10px 14px;
      background: var(--slate-100); border-bottom: 1px solid var(--slate-200);
    }
    .chrome > span { width: 10px; height: 10px; border-radius: 50%; background: var(--slate-300); }
    .url {
      margin-left: 10px; flex: 1; max-width: 280px; font-size: 12px; color: var(--slate-500);
      background: var(--white); border-radius: 6px; padding: 3px 10px; white-space: nowrap; overflow: hidden;
    }
    .screen { width: 100%; }
    img { width: 100%; height: 100%; object-fit: cover; object-position: top left; }
    .placeholder {
      height: 100%; display: grid; place-content: center; text-align: center; gap: 6px; padding: 16px;
      background:
        repeating-linear-gradient(135deg, transparent 0 14px, rgba(49, 46, 129, 0.035) 14px 28px),
        var(--indigo-50);
    }
    .ph-label { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--slate-500); }
    .ph-name { font-weight: 600; color: var(--indigo-900); }
    .frame--phone { border-radius: 30px; border: 8px solid var(--indigo-950); max-width: 260px; }
    .frame--phone .placeholder { background-color: var(--teal-50); }
  `,
})
export class ScreenshotComponent {
  readonly alt = input.required<string>();
  readonly src = input<string | null>(null);
  readonly device = input<'desktop' | 'phone'>('desktop');
  readonly eager = input(false);
  readonly url = input('greenfield.padhaaii.com');
}
