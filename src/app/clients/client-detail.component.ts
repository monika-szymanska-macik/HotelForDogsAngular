import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IClient } from './client';


@Component({
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})

export class ClientDetailComponent implements OnInit {
    pageTitle: string = 'Client Detail';
    client!: IClient;

    constructor(private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get("clientId")!;
        this.pageTitle += `: ${id}`;
        this.client = {
            "clientId" : id,
            "client" : "John Smith",
            "phoneNumber" : "500500500",
            "dog" : "Max",
            "reservation" : "may"
        }
    }
    onBack(): void {
        this.router.navigate(['/clients']);
    }
}