import { Component ,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ComputerPartService } from 'src/app/services/computer-part.service';
import { ComputerPart } from 'src/app/shared/models/ComputerPart';

@Component({
  selector: 'app-computer-part',
  templateUrl: './computer-part.component.html',
  styleUrls: ['./computer-part.component.css']
})
export class ComputerPartComponent implements OnInit{

  computerPart!: ComputerPart;

  constructor(
    activatedRoute:ActivatedRoute,
    computerPartService:ComputerPartService, 
    private cartService:CartService,
    private router: Router) {
        activatedRoute.params.subscribe((params) => {
        if(params.id){
          computerPartService.getComputerPartById(params.id).subscribe(serverFood => {
            this.computerPart = serverFood;
          });
          // this.computerPart = computerPartService.getComputerPartById(params.id);
        }
      })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.computerPart);
    this.router.navigateByUrl('/cart-page');
  }
}
