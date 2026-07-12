import { ChangeDetectionStrategy, Component, DOCUMENT, LOCALE_ID, inject } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'

type LocaleMeta = { title: string; description: string; ogLocale: string; url: string }

const META: Record<string, LocaleMeta> = {
  'pt-BR': {
    title: 'Pedro Bernardi — AI Software Engineer especializado em GenAI, LLMOps e Agentes de IA',
    description:
      'Portfólio de Pedro Bernardi — AI Software Engineer focado em GenAI, LLMOps e agentes de IA. Experiência, formação e projetos.',
    ogLocale: 'pt_BR',
    url: 'https://pedrobernardi.com/'
  },
  en: {
    title: 'Pedro Bernardi — AI Software Engineer specializing in GenAI, LLMOps and AI Agents',
    description:
      'Portfolio of Pedro Bernardi — AI Software Engineer focused on GenAI, LLMOps and AI agents. Experience, education and projects.',
    ogLocale: 'en_US',
    url: 'https://pedrobernardi.com/en/'
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  constructor() {
    const locale = inject(LOCALE_ID)
    const meta = META[locale] ?? META['pt-BR']
    inject(DOCUMENT).documentElement.lang = locale

    inject(Title).setTitle(meta.title)
    const metaService = inject(Meta)
    metaService.updateTag({ name: 'description', content: meta.description })
    metaService.updateTag({ property: 'og:title', content: meta.title })
    metaService.updateTag({ property: 'og:description', content: meta.description })
    metaService.updateTag({ property: 'og:locale', content: meta.ogLocale })
    metaService.updateTag({ property: 'og:url', content: meta.url })
  }
}
