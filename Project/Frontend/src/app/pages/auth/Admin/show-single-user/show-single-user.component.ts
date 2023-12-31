import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-show-single-user',
  templateUrl: './show-single-user.component.html',
  styleUrls: ['./show-single-user.component.css']
})
export class ShowSingleUserComponent {
  users:any

  constructor(private auth:AuthService ,private activated : ActivatedRoute){}
  ngOnInit(){
    this.activated.paramMap.subscribe(params=>{
      let Id = params.get('id')
      console.log(params.get('id'))
      this.getSingleUserData(Id)
    })
    // this.auth.showAllUsers().subscribe(res=>{
    //   this.users = res
    // })
  }
  getSingleUserData(Id : any){
    this.auth.showSingleUser(Id).subscribe(res=>{
      console.log(res)
      this.users= res.data
    })
  }

  }


