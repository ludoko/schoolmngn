import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayErrorService } from '../service/display-error.service';
import { AppError } from '../data/app-error';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    displayErrorService: DisplayErrorService;

    constructor(private injector: Injector) {
        super();
    }

    handleError(error: Error) {
        // alert('Unexpected error has occured.');
        let msg = error.toString();
        if (error instanceof AppError) {
            msg = (error as AppError).originalError.message;
        } else {
            msg = JSON.stringify(error);
        }

        console.log('Error: ' + msg);
        this.displayErrorService = this.injector.get(DisplayErrorService);
        this.displayErrorService.displayError(msg);
    }
}
