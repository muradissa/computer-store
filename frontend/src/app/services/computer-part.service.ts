import { Injectable } from '@angular/core';
import { ComputerPart } from '../shared/models/ComputerPart';
import { sample_computer_parts } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ComputerPartService {

  constructor() { }

  getAll():ComputerPart[]{
    return sample_computer_parts;
  }

  getAllComputerPartsBySearch(searchTerm : string){
    if(searchTerm=== ''){
      return this.getAll();
    }
    return this.getAll().filter(computerpart => 
      computerpart.name.toLowerCase().includes(searchTerm.toLowerCase())
      ||  computerpart.description.toLowerCase().includes(searchTerm.toLowerCase())
      ||  computerpart.company.toLowerCase().includes(searchTerm.toLowerCase())
      )
  }
}
