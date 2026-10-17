import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Aleaon Technologies logo — "Teal A's" direction (working version). */
@Component({
  selector: 'app-aleaon-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--dark]="dark()" [style.--size.px]="size()">
      <svg class="mark" viewBox="0 0 96 96" aria-hidden="true">
        <defs>
          <linearGradient [attr.id]="'al-t-' + uid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#3730A3" /><stop offset="1" stop-color="#1E1B4B" />
          </linearGradient>
          <linearGradient [attr.id]="'al-g-' + uid" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stop-color="#0D9488" /><stop offset=".55" stop-color="#2DD4BF" /><stop offset="1" stop-color="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" [attr.fill]="'url(#al-t-' + uid + ')'"
              [attr.stroke]="dark() ? 'rgba(255,255,255,.16)' : null" stroke-width="2" />
        <path d="M24 58 L48 28 L72 58" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M34 74 L48 56 L62 74" fill="none" [attr.stroke]="'url(#al-g-' + uid + ')'" stroke-width="10"
              stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="type">
        <span class="name"><span class="a">A</span>LE<span class="a">A</span>ON</span>
        <span class="sub">TECHNOLOGIES</span>
      </span>
      <span class="visually-hidden">Aleaon Technologies</span>
    </span>
  `,
  styles: `
    :host { display: inline-flex; }
    .logo { --size: 40px; display: inline-flex; align-items: center; gap: calc(var(--size) * 0.3); }
    .mark { width: var(--size); height: var(--size); flex: none; }
    .type { display: grid; gap: calc(var(--size) * 0.08); line-height: 1; }
    .name {
      font-weight: 600; font-size: calc(var(--size) * 0.56); letter-spacing: 0.14em;
      color: var(--indigo-900);
    }
    .a { background: var(--ai-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sub {
      font-weight: 500; font-size: calc(var(--size) * 0.19); letter-spacing: 0.42em;
      color: var(--slate-600);
    }
    .logo--dark .name { color: #fff; }
    .logo--dark .a { background: none; color: var(--teal-300); }
    .logo--dark .sub { color: #A5B4FC; }
  `,
})
export class AleaonLogoComponent {
  private static next = 0;
  readonly uid = AleaonLogoComponent.next++;
  readonly size = input(40);
  readonly dark = input(false);
}
