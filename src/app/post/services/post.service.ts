import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Ipost } from 'src/app/model/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL = environment.BASE_URL;
POST_URL =`${environment.BASE_URL}/posts.json`
private updatePostSub:Subject<Ipost> = new Subject<Ipost>()
updatePostObs$:Observable<Ipost> = this.updatePostSub.asObservable()
setUpdatePost(post:Ipost){
 return this.updatePostSub.next(post)
}

private removeSub$:Subject<string> = new Subject<string>()
public removeObs$:Observable<string> = this.removeSub$.asObservable()

  constructor(private http:HttpClient) { }

  public sentRemoveId(id:string){
          this.removeSub$.next(id)
   }

  fetchPosts():Observable<any>{
    return this.http.get<any>(this.POST_URL).pipe(
      map((data:any)=>{
        let postArr:Array<Ipost> = []

        for (const key in data) {
          
          postArr.push({...data[key],id:key})
        }
        
        return postArr;
      })
    )
  }

  createPost(post:Ipost){
    return this.http.post(this.POST_URL,post)
  }

  removePost(id:string){
    let remove_url = `${this.BASE_URL}/posts/${id}.json`
    return this.http.delete(remove_url)
  }

  updatePost(post:Ipost):Observable<Ipost>{
    let updated_url = `${this.BASE_URL}/posts/${post.id}.json`
    return this.http.patch<Ipost>(updated_url,post)
  }
}
