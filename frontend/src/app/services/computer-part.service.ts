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
}
