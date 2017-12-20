import { Reader } from './models/reader';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ReadersService } from './readers.service';

@Injectable()
export class ReaderResolve implements Resolve<Reader> {
    constructor(private readersService: ReadersService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.readersService.getReader(route.params['id']);
    }
}