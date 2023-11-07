import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/shared/todos/todos.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SessionService } from 'src/app/core/services/session.service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, TodosComponent, NavbarComponent, MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  private sessionService = inject(SessionService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  user: string = this.sessionService.getToken();

  navigateToAddNewTodo(): void {
    this.router.navigate([0], { relativeTo: this.activatedRoute.parent });
  }
}
