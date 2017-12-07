import { Component, OnInit } from '@angular/core';
import { DemoData, DemoDataService } from './demo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Print Demo';
  data:DemoData[];
  selectedToPrint:DemoData[] = [];
  constructor(private printService: DemoDataService) { }
  
  ngOnInit() {
   
    setTimeout(() => {
        this.printService.getData().then(d => this.data = d);
       
    }, 1000);

    
  }

  getPrint(){
    if(this.data){
        if(this.selectedToPrint.length > 0){
            return this.selectedToPrint;
        }
        return this.data;
    }
  }
    
}
