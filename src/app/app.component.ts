import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Rdts';
  employeeForm: FormGroup;
     links:any=[];
  constructor(public fb: FormBuilder){}
    files : any =[];
    singlevideo;
  ngOnInit() {
    
    this.mainForm();
    this.singlevideo= 0;
    
   }

   

   mainForm() {
    this.employeeForm = this.fb.group({
     myimage:[,[Validators.required]]
    
    })
  }

    video;
    gotosingle(k){


      this.singlevideo=1;
      this.video='./../assets/videos/'+k.name;
      
    }

    backtomain(){
      this.singlevideo=0;
      this.video=null;
    }

  selectedFiles;

  uploadFile(fl){
        
    this.selectedFiles = fl.target.files[0];
    console.log(this.selectedFiles)
    console.log(this.selectedFiles.name)

  }

  onSubmit() {
  
        this.files.push({name : this.selectedFiles.name});
        this.links.push({name : './../assets/videos/'+this.selectedFiles.name});
        console.log(this.files);
       // this.employeeForm.get('myimage').setValue(' ');
         

  }

  trash(f){
   let index = this.files.indexOf(f);
    this.files.splice(index,1);
    this.links.splice(index,1);

  }

  


}
