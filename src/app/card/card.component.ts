import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() planData = {
    planTitle:"FREE",
      price:0,
      period:"month",
      user:{
        bold:true,
        userAllowed:"Single User",
        active:true
      },
      storage:{
        size:5,
        active:true
      },
      publicProject:{
        publicProjectAllowed:"Unlimited",
        active:true
      },
      communityAccess:{
        communityAccess:"Community Access",
        active:true
      },
      UnlimitedPrivateProject:{
        PPAllowed:"Unlimited",
        active:false
      },
      phoneSupprt:{
        phoneSupportAllowed:"Dedicated",
        active:false
      },
      subdomain:{
        bold:false,
        subdomainAllowed:"Free",
        active:false
      },
      statusReport:{
        reportPeriod:"Monthly",
        active:false
      }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
