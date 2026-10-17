import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Inline stroke icons (24×24, 2px stroke). Add new ones to ICONS. */
const ICONS: Record<string, string[]> = {
  students: ['M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19', 'M10 10.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z', 'M20 19v-1.5a3.5 3.5 0 0 0-2.5-3.35', 'M15 4.15a3.25 3.25 0 0 1 0 6.2'],
  attendance: ['M8 3v3', 'M16 3v3', 'M4 9h16', 'M5 5.5h14a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z', 'm9 14.5 2 2 4-4'],
  timetable: ['M4 5h16v14H4z', 'M4 10h16', 'M4 15h16', 'M10 5v14', 'M15 5v14'],
  marks: ['M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z', 'M14 3.5V8h4', 'M10 13h5', 'M10 16.5h3'],
  fees: ['M4 6.5h16v11H4z', 'M4 10h16', 'M8 14.5h3'],
  leave: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7v5l3 2'],
  visitors: ['M15 3.5h3.5A1.5 1.5 0 0 1 20 5v14a1.5 1.5 0 0 1-1.5 1.5H15', 'M10 16.5 14.5 12 10 7.5', 'M14.5 12H4'],
  notifications: ['M18 9.5a6 6 0 1 0-12 0c0 6.5-2.5 8-2.5 8h17S18 16 18 9.5Z', 'M10.3 20.5a2 2 0 0 0 3.4 0'],
  mobile: ['M7.5 2.5h9a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z', 'M11 18h2'],
  shield: ['M12 21s7.5-3.5 7.5-9.5V5.5L12 3 4.5 5.5v6C4.5 17.5 12 21 12 21Z', 'm9 12 2 2 4-4'],
  admissions: ['M12 3 2.5 8 12 13l9.5-5L12 3Z', 'M6 10.2V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.8', 'M21.5 8v5'],
  fingerprint: ['M12 11v3.5c0 2-.5 4-1.5 5.5', 'M8.5 12c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v1.5c0 2.5-.6 4.6-1.6 6.3', 'M5.5 15.5c.3-1 .5-2.2.5-3.5a6 6 0 0 1 9.5-4.9', 'M18.4 9.4c.4.8.6 1.7.6 2.6v1c0 1.6-.2 3.2-.6 4.6', 'M4.5 9.5A8.5 8.5 0 0 1 18 5'],
  palette: ['M12 21a9 9 0 1 1 9-9c0 2.5-2 3.5-3.5 3.5H15a1.5 1.5 0 0 0-1 2.6c.6.6.4 2.9-2 2.9Z', 'M7.5 11.5h.01', 'M10 7.5h.01', 'M14.5 7.5h.01'],
  cloud: ['M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.9 9 4.75 4.75 0 0 1 17.5 18.5H7Z'],
  arrow: ['M5 12h14', 'm13 6 6 6-6 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  check: ['m5 12.5 4.5 4.5L19 7.5'],
  rupee: ['M7 4.5h10', 'M7 9h10', 'M7 4.5h3.5a4.5 4.5 0 0 1 0 9H7l7.5 7'],
  layers: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 13 9 5 9-5'],
};

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @for (d of paths(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
  styles: `:host { display: inline-flex; flex: none; }`,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(24);
  readonly paths = computed(() => ICONS[this.name()] ?? []);
}
