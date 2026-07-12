import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-avatar',
  standalone: true,
  imports: [],
  templateUrl: './home-avatar.component.html',
  styleUrl: './home-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAvatarComponent {

}
