import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private customerService: CustomerService,
    private dom: DomSanitizer){}
  obj: any;

  getCustomer(){
    this.obj = this.customerService.getCustomer().subscribe((data: any[]) => {
        this.obj = data;

    });
  }


  public getImageSource(base64Image:string): any {
    return this.dom.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64Image);
  }

  ngOnInit(){
    this.getCustomer();
  }

}
