import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient) { }
  // Url="http://embeded.runasp.net/api/Student/GetStudent";
  Url="http://embeded.runasp.net/api/Student";

  getAllStudents(){
    return this.http.get(this.Url+"/GetStudent")
  }

  deleteStudent(){
   
     
    return this.http.delete(this.Url+"/DeleteStudents")
   }
}
