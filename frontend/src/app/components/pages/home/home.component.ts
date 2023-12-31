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

  constructor(private computerPartsService:ComputerPartService , activatedRoute: ActivatedRoute){
    let computerPartsObservalbe:Observable<ComputerPart[]>;
    activatedRoute.params.subscribe((params) => {
      // to enable params.searchTerm spot params['searchTerm'] go to tsconfog.json and change "noPropertyAccessFromIndexSignature" to false,
      
      if (params.searchTerm){
        computerPartsObservalbe = this.computerPartsService.getAllComputerPartsBySearch(params['searchTerm']);
        // this.computerParts = this.computerPartsService.getAllComputerPartsBySearch(params['searchTerm']);
      }
      else if (params.tag){
        computerPartsObservalbe = this.computerPartsService.getAllPartsByTags(params.tag);
        // this.computerParts = this.computerPartsService.getAllPartsByTags(params['tag'])
      } 
      else{
        computerPartsObservalbe = this.computerPartsService.getAll();
        //this.computerParts=computerPartsService.getAll();
      }
        computerPartsObservalbe.subscribe((serverComputerParts) => {
          this.computerParts = serverComputerParts;
        })
    })
  }

  ngOnInit(): void {
  }
  
}
