


import {inject} from '@angular/core';
import {
  CanActivateFn, CanMatchFn,
  Router, UrlTree
} from '@angular/router';
import { TokenStorageService } from './token-storage.service';


export const authGuard: CanMatchFn|CanActivateFn = () => {
  const tokenStorageService = inject(TokenStorageService);
  const router = inject(Router);

  if (tokenStorageService.getToken() != "" && tokenStorageService.getToken() != null) {
    return true;
  }
  return router.parseUrl('/auth/login');
};