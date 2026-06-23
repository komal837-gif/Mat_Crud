import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ipost } from 'src/app/model/post';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PreloadingStrategy } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
postForm!:FormGroup
editObj!:Ipost
isInEditMode:boolean = false;
  constructor(
    private snackBar:SnackBarService,
    private postService:PostService,
    private matDialogRef:MatDialogRef<PostFormComponent>,
    @Inject (MAT_DIALOG_DATA) postObj:Ipost
  ) { 
    this.creteForm()
    if(postObj){
      this.isInEditMode = true;
      this.editObj = postObj;
      this.postForm.patchValue(postObj)
    }
  }

  ngOnInit(): void {
  
  }

  creteForm(){
    this.postForm = new FormGroup({
      title:new FormControl (null,[Validators.required]),
      body: new FormControl(null,[Validators.required]),
      userId:new FormControl(null,[Validators.required])

    })
  }

  OnPostSubmit(){
   if(this.postForm.invalid){
    return
   }
   let PostObj:Ipost =  this.postForm.value;
    this.postService.createPost(PostObj)
      .subscribe({
        next:(data:any)=>{
          this.snackBar.SuccessMsg(`The post with id ${data.name} is created successfully!!`)
          this.matDialogRef.close({...PostObj,id:data.name})
        },error:err=>{
          console.log(err);
          
        }
      })
  }

  onUpdatePost(){
    if(this.postForm.valid){
      let UPDATED_OBJ:Ipost = {
        ...this.postForm.value,
        id: this.editObj.id}
      console.log(UPDATED_OBJ);
      this.postService.updatePost(UPDATED_OBJ).subscribe({
        next:res=>{
          console.log(res);
          this.matDialogRef.close()
          this.postService.setUpdatePost(UPDATED_OBJ)
          
        },error:err=>{
          console.log(err);
          
        }
      })

      } 
  }

}
