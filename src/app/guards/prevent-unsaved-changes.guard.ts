import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export type CanDeactivateType =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;

export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}

export const PreventUnsavedChangesGuard: CanDeactivateFn<
  CanComponentDeactivate
> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
