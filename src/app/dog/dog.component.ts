import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

import { IDog } from './dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})

export class DogComponent implements OnInit {
  pageTitle: string = 'Dog Detail';
  dog!: IDog;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("dogId")!;
        this.pageTitle += `: ${id}`;
        this.dog = {
          "dogId" : id,
          "name" : "Reksio",
          "additionalInformation" : "likes walking",
          "weight" : "10"
        }
  }
  onBack(): void{
    this.router.navigate(['']);
  }


}
