import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-avatar',
    imports: [NgOptimizedImage],
    templateUrl: './home-avatar.component.html',
    styleUrl: './home-avatar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAvatarComponent {

}
