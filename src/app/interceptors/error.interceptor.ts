import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);

      switch (error.status) {
        case 401:
          console.error('Unauthorized - Please log in again.');
          break;
        case 403:
          console.error('Forbidden - You don’t have permission.');
          break;
        case 404:
          console.error('Not Found - Resource doesn’t exist.');
          break;
        case 500:
          console.error('Internal Server Error.');
          break;
        default:
          console.error('An unexpected error occurred.');
      }

      alert(`Error: ${error.message || 'An unexpected error occurred'}`);

      return throwError(() => new Error(error.message || 'Server error'));
    })
  );
};
