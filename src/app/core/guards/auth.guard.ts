import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  const token = sessionService.getToken();

  if(token && token !== 'null') return true;

  router.navigate(['login']);

  return false;
};
