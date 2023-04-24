import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.removeTargetAttributeIfNotLocalhost("portfolioLink");
  }

  removeTargetAttributeIfNotLocalhost(className: string){
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const elements = document.getElementsByClassName(className);
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLAnchorElement;
      if (element.target === "_blank" && !isLocalhost) {
        element.removeAttribute("target");
      }
    }
  }
  

}
