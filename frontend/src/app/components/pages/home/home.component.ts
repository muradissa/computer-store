import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ComputerPartService } from 'src/app/services/computer-part.service';
import { ComputerPart } from 'src/app/shared/models/ComputerPart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  computerParts :ComputerPart[]=[];

  constructor(private computerPartsService:ComputerPartService){
    //let computerPartsObservalbe:Observable<ComputerPart[]>;
    this.computerParts=computerPartsService.getAll();
  }

  ngOnInit(): void {
  }
  
}
