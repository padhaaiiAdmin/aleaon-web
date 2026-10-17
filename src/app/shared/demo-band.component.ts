import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-band',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="band" aria-labelledby="demo-band-title">
      <div class="container inner">
        <div class="copy">
          <h2 id="demo-band-title">{{ title() }}</h2>
          <p>{{ text() }}</p>
        </div>
        <div class="btn-row">
          <a routerLink="/contact" class="btn btn--light">Book a demo</a>
          <a routerLink="/padhaaii" class="btn btn--ghost-light">Explore the product</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .band { background: var(--indigo-800); padding: 64px 0; position: relative; overflow: hidden; }
    .band::after {
      content: ''; position: absolute; right: -60px; top: -60px; width: 260px; height: 260px;
      border-radius: 50%; border: 28px solid rgba(45, 212, 191, 0.18);
    }
    .inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px; position: relative; z-index: 1; }
    .copy { max-width: 560px; display: grid; gap: 10px; }
    h2 { color: var(--white); font-size: clamp(1.6rem, 3vw, 2.1rem); }
    p { color: var(--indigo-100); font-size: 1.05rem; }
  `,
})
export class DemoBandComponent {
  readonly title = input('See Padhaaii in action');
  readonly text = input('Book a walkthrough for your principal and admin team, and see how every module fits the way your school already works.');
}
