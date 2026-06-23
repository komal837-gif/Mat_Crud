import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoading:boolean = false;
  title = 'Mat_Crud';
  private spinnerService = inject(SpinnerService)
  private _cdr = inject(ChangeDetectorRef)
  ngOnInit(): void {
    this.spinnerService.Spinner.subscribe(flag=>{
      this.isLoading = flag
      this._cdr.detectChanges()
    })
      
  }
}
