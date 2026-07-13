import { ChangeDetectionStrategy, Component, LOCALE_ID, inject } from '@angular/core'

const LOCALES = {
  'pt-BR': { label: 'PT', isEn: false, otherHref: '/en/' },
  en: { label: 'EN', isEn: true, otherHref: '/' }
} as const

@Component({
  selector: 'app-home-language',
  standalone: true,
  templateUrl: './home-language.html',
  styleUrl: './home-language.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLanguage {
  private readonly locale = LOCALES[inject(LOCALE_ID) as keyof typeof LOCALES] ?? LOCALES['pt-BR']
  protected readonly label = this.locale.label
  protected readonly isEn = this.locale.isEn
  protected readonly otherHref = this.locale.otherHref
}
