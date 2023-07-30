import { Component } from '@angular/core';
import { ComputerPartService } from 'src/app/services/computer-part.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(computerPartService:ComputerPartService) {
    computerPartService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
    // this.tags =  computerPartService.getAllTags()

   }

  ngOnInit(): void {
  }
}
