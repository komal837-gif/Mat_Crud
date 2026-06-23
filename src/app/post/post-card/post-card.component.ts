import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/model/post';
import { GetConfirmComponent } from 'src/app/shared/components/get-confirm/get-confirm.component';
import { PostService } from '../services/post.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postObj!:Ipost;
  constructor(
    private matDialog:MatDialog,
    private postService:PostService
  ) { }

  ngOnInit(): void {
  }

  onRemove(){
    let matConfig = new MatDialogConfig();
    matConfig.width = '600px';
    matConfig.data = `Are you Sure, You Want to remove this post with id ${this.postObj.id}`
    matConfig.disableClose = true;
    let matDialogRef = this.matDialog.open(GetConfirmComponent,matConfig)
    matDialogRef.afterClosed().subscribe(res=>{
      if(res){
         this.postService.removePost(this.postObj.id).subscribe(data=>{
        this.postService.sentRemoveId(this.postObj.id)
        
       })
      }

    })
  }

  onEdit(){
     let matConfig = new MatDialogConfig();
    matConfig.width = '600px';
    matConfig.data = this.postObj
    matConfig.disableClose = true;
    this.matDialog.open (PostFormComponent,matConfig)
  }
}
