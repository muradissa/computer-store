import { Injectable } from '@angular/core';
import { ComputerPart } from '../shared/models/ComputerPart';
import { sample_computer_parts, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COMPUTERPARTS_BY_SEARCH_URL, COMPUTERPARTS_BY_TAG_URL, COMPUTERPARTS_TAGS_URL, COMPUTERPART_BY_ID_URL, COMPUTERPART_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ComputerPartService {
  // static getAllTags() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }


  getAll():Observable<ComputerPart[]>{
    //return sample_computer_parts;
    return this.http.get<ComputerPart[]>(COMPUTERPART_URL)
  }


  getAllComputerPartsBySearch(searchTerm : string){
    // if(searchTerm=== ''){
    //   return this.getAll();
    // }
    // return this.getAll().filter(computerpart => 
    //   computerpart.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   ||  computerpart.description.toLowerCase().includes(searchTerm.toLowerCase())
    //   ||  computerpart.company.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
    return this.http.get<ComputerPart[]>(COMPUTERPARTS_BY_SEARCH_URL+searchTerm);
  }


  getComputerPartById(id : string): Observable<ComputerPart>{
    //return this.getAll().find(computerPart => computerPart.id === computerPartId) ?? new ComputerPart;
    return this.http.get<ComputerPart>(COMPUTERPART_BY_ID_URL+id);
  }


  getAllTags():Observable<Tag[]>{
    //return sample_tags;
    debugger;
    return this.http.get<Tag[]>(COMPUTERPARTS_TAGS_URL);
  }


  getAllPartsByTags( tag: string):Observable<ComputerPart[]>{
    if(tag === 'All'){
      return this.getAll();
    }
    // return this.getAll().filter(computerPart=> computerPart.tags?.includes(tag));
     return this.http.get<ComputerPart[]>(COMPUTERPARTS_BY_TAG_URL+tag);
  }



}
