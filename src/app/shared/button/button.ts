import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'button[app-button],a[app-button]',
    imports: [],
    templateUrl: './button.html',
    styleUrl: './button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {}
