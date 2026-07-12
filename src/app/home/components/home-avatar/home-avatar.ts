import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-avatar',
    imports: [NgOptimizedImage],
    templateUrl: './home-avatar.html',
    styleUrl: './home-avatar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAvatar {

}
