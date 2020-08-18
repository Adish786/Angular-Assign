import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import{ApiServiceService}from'../_service/api-service.service'
@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.css']
})
export class VerificationFormComponent implements OnInit {
  // @ViewChild('cd', { static: false }) 
  verificationForm: FormGroup;
  otpForm:FormGroup;
  submitted = false;
  showOTP=false;
  otpSubmit=false;
  countdown: any;
  constructor(
    private fb: FormBuilder,
     private httpService: ApiServiceService
  ) { } 


  ngOnInit(): void {
    this.formValidation();
    this.otpFormvalidation();
  }




  formValidation(){
    this.verificationForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required], ],
      panNumber: ['', [Validators.required,Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]],
      mobile: ['', [Validators.required]],

    },
    );
  }

  otpFormvalidation(){
    this.otpForm = this.fb.group({
    otp: ['', Validators.required],

  
  },
   
  );
}
get verificationFormControl() {
  return this.verificationForm.controls;
}
get otpFormControl() {
  return this.otpForm.controls;
}
handleEvent(event){
  console.log(event)
//  this.countdown.begin(true);
}
  onVerify(){
    this.submitted = true;
  
    if (this.verificationForm.valid ) {
        this.httpService.getOTP(this.verificationForm.value).subscribe(res=>{
          if(res.statusCode == 200){
            console.log(res)
            alert("Verify with success .")
            localStorage.setItem("mobileNumber",this.verificationForm.value.mobile)
            this.showOTP=true;
          } 
        },(err)=>{
          alert(err)
        })
      
  }
  }
  onGetOTP(){
    this.otpSubmit = true;
    console.log(this.otpForm.value.otp);
    var mobile=localStorage.getItem("mobileNumber");
    var req={
      "mobile":mobile,
      "otp":this.otpForm.value.otp
    }
    if(this.otpForm.valid){
      this.httpService.verifyOtp(req).subscribe(res=>{
        if(res.statusCode == 200){
          console.log(res)
          alert("otp generate sucessfully ===",)
          this.showOTP=true;
        } 
      },(err)=>{
        alert(err)
      })
      alert(this.otpForm.value.otp)

    }

  }
  onResend(){
    
  }
}


