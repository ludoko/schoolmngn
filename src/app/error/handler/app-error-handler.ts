import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error: Error) {
        // alert('Unexpected error has occured.');
        console.log(error);
    }
}
