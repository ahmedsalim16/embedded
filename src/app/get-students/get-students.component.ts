import { Component, NgZone, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { Students } from '../students';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrl: './get-students.component.css'
})
export class GetStudentsComponent implements OnInit {
constructor(private shared:SharedserviceService, private ngZone: NgZone){
}
  student:any;
  students: any[] = []; 
ngOnInit(): void {
  this.getStudents();
}


getStudents(){
  
  this.shared.getAllStudents().subscribe(
    res=>{
      
      console.log(res)
      if (res && Array.isArray(res)) {
        this.student = res; // البيانات جاهزة كمصفوفة
        alert("Student logged in successfully")
      } else if (res ) {
        this.student = [res]; // تحويل الكائن إلى مصفوفة
        alert("Student logged in successfully")
      } else {
        this.student = []; // إذا لم توجد بيانات
        alert("student not found");
      }
      
      
      
     
      
      
      

    },
    err=>{
      alert("error")
      console.log(err);
      
    }
  )
}


delete(){
  this.shared.deleteStudent() .subscribe(
    res=>{
      console.log(res);
     this.ngOnInit()
      alert("sucessfully Cleared");
      },
      err=>{
        console.log(err);
        }
  )

}

  
}
