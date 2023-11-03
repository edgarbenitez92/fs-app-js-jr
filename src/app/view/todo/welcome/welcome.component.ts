import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { TodosComponent } from 'src/app/shared/todos/todos.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, TodosComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  private activatedRoute = inject(ActivatedRoute);
  user!: string;

  ngOnInit(): void {
    this.getUserNameByUrl();
  }

  getUserNameByUrl(): void {
    this.activatedRoute.url.subscribe((url: UrlSegment[]) => {
      this.user = url[1].path;
    });
  }
}
