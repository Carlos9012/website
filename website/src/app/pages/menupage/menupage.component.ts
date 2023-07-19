import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) {}
  getMenuId: any;
  menuData: any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getMenu');
    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menuData>>');
    }
  }
}
