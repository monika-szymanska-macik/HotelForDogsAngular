import { Component, OnInit, OnDestroy } from '@angular/core';

import { ClientService } from './client.service';
import { IClient } from './client';
import { Subscription } from 'rxjs';


@Component({
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {
    pageTitle : string = 'Client List';
    errorMessage : string = '';
    sub: Subscription | undefined;

    _listFilter!: string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredClients = this.listFilter ? this.performFilter(this.listFilter) : this.clients;
    }
    filteredClients!: IClient[];
    clients : IClient[] = [];

    constructor(private clientService: ClientService) {
    }
    performFilter(filterBy : string) : IClient[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.clients.filter((client: IClient) =>
            client.fullName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.sub = this.clientService.getClients().subscribe({
            next: clients => {
                this.clients = clients;
                this.filteredClients = this.clients;
                },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}