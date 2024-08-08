import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ErrorService } from '../services/error.service';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  errorService.clearError();

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        errorService.setError(error.error.message);
      } else {
        errorService.setError('There was an error');
      }

      return EMPTY;
    })
  );
};
