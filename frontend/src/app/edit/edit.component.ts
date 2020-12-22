import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataobject:any;
  myData:any;
  p:number =1;
  term :any;
  
    constructor(private service:ServiceService, private modalService: NgbModal) { 
      this.dataobject = {
        title:"",
        subject:"",
        firstName : '',
        lastName : '',
        class : '',
        marks: ''
    
      }
    
    }
  
    ngOnInit(): void {
      this.service.getData().subscribe((data:object)=>{
        this.myData = data;
       })
    }
  
  
  //Update Data
    update(){
      this.service.update(this.dataobject).subscribe((data:object)=>{
        console.log(this.dataobject);
        alert('saved')
          });
          this.modalService.dismissAll()
          
        
    
    }
  
    //Open Modal
    openXl(content,d){
      this.modalService.open(content, { size: 'lg' });
      this.dataobject = d; 
    }
  
  
    //Delete Data
    delete(id){
      if(window.confirm('are you sure you want to delete?'))
      {
          this.service.delete(id).subscribe(success => {
            if (success) {
              this.service.getData().subscribe((data)=>{
                this.myData = data;
               });
  
              alert('Deleted Successfully')
            }
          });
      };
    }
  
  
  
}
