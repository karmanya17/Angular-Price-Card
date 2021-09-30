import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';

  cards=[
    {
      planTitle:"FREE",
      price:0,
      period:"month",
      user:{
        bold:false,
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
    },
    {
      planTitle:"PLUS",
      price:9,
      period:"month",
      user:{
        bold:true,
        userAllowed:"5 Users",
        active:true
      },
      storage:{
        size:50,
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
        active:true
      },
      phoneSupprt:{
        phoneSupportAllowed:"Dedicated",
        active:true
      },
      subdomain:{
        bold:false,
        subdomainAllowed:"Free",
        active:true
      },
      statusReport:{
        reportPeriod:"Monthly",
        active:false
      }

    },
    {
      planTitle:"PRO",
      price:49,
      period:"month",
      user:{
        bold:true,
        userAllowed:"Unlimited Users",
        active:true
      },
      storage:{
        size:150,
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
        active:true
      },
      phoneSupprt:{
        phoneSupportAllowed:"Dedicated",
        active:true
      },
      subdomain:{
        bold:true,
        subdomainAllowed:"Unlimited Free",
        active:true
      },
      statusReport:{
        reportPeriod:"Monthly",
        active:true
      }

    }
    
  ]
}
