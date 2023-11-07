import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/shared/todos/todos.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, TodosComponent, NavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  private sessionService = inject(SessionService);
  user: string = this.sessionService.getToken();
}
