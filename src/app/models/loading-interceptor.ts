import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';
import { HttpInterceptorFn } from '@angular/common/http';

export const HttpLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setLoading(true);

  return next(req).pipe(
    finalize(() => loadingService.setLoading(false))
  );
};