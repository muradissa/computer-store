import { Injectable } from '@angular/core';
import { ComputerPart } from '../shared/models/ComputerPart';
import { sample_computer_parts, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

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


  getComputerPartById(computerPartId : string): ComputerPart{
    return this.getAll().find(computerPart => computerPart.id === computerPartId) ?? new ComputerPart;
  }


  getAllTags():Tag[]{
    return sample_tags;
  }


  getAllPartsByTags( tag: string):ComputerPart[]{
    if(tag === 'All'){
      return this.getAll();
    }
    console.log(tag)
    return this.getAll().filter(computerPart=> computerPart.tags?.includes(tag));
  }



}
