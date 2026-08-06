import { TestBed } from '@angular/core/testing';
import { App } from './app';

// jsdom não implementa IntersectionObserver; RevealDirective (usada por Sobre,
// Trajetoria, Projetos e Contato) precisa dele durante o ngAfterViewInit.
if (typeof IntersectionObserver === 'undefined') {
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render hero name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-nome')?.textContent).toContain('Gustavo de Deus');
  });
});
