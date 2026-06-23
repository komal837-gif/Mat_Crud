import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Ipost } from 'src/app/model/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
postsArr:Array<Ipost> = []
  constructor(
    private postService:PostService,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
    this.removePost()

   this.postService.updatePostObs$.subscribe(res=>{
    let getIndex = this.postsArr.findIndex(i=>i.id === res.id)
    this.postsArr[getIndex] = res
   })
  }

  getAllPosts(){
    this.postService.fetchPosts().subscribe({
      next:data=>{
        this.postsArr = data,
        console.log(data);   
      }
    })

  }

  onAdd(){
    let matConfig = new MatDialogConfig();
    matConfig.width='600px';
    matConfig.disableClose=true;
    let matDialogRef = this.matDialog.open(PostFormComponent,matConfig)
    matDialogRef.afterClosed().subscribe(res=>{
        this.postsArr.push(res)
      
    })
  }

  removePost(){
    this.postService.removeObs$.subscribe(res=>{
    let getIndex = this.postsArr.findIndex(I=>I.id === res)
    this.postsArr.splice(getIndex,1)
   })
  }

}
