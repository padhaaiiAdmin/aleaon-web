import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: 'padhaaii', loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductComponent) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then((m) => m.PricingComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },
  { path: 'privacy', loadComponent: () => import('./pages/legal/privacy.component').then((m) => m.PrivacyComponent) },
  { path: 'terms', loadComponent: () => import('./pages/legal/terms.component').then((m) => m.TermsComponent) },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent) },
];
