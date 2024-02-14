import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth.service';
import { userdetails } from '../../models/userdetails';
import { HttpClientModule } from '@angular/common/http';
import { userresponse } from '../../models/userresponse';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-get-token',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './get-token.component.html',
  providers: []
})
export class GetTokenComponent {
  //username!: string;
  //password!: string;
  userInfo: userdetails = { username: '', password: '', granttype: 'password' };
  usrresponse: userresponse = { refreshToken: '', token: '' };
  messageResponse!: string;

  @ViewChild('responseModal', { static: true }) responseModal!: TemplateRef<any>;
  constructor(private router: Router, private modalService: NgbModal, private authService: AuthService, private tokenService: TokenService) {

  }
  onSubmit() {
    // Implement authentication logic here
    // For example, check if the username and password are valid

    this.authService.getAuthToken(this.userInfo)
      .subscribe(p => {
        this.usrresponse = p;
        console.log(this.usrresponse);
        if (this.usrresponse.token != null) {
          this.tokenService.setToken(this.usrresponse.token);
          this.tokenService.setRefreshToken(this.usrresponse.refreshToken);
          this.router.navigate(['/home']);
        } else {
          this.messageResponse = "ERROR: Invalid Username / Password !";
          this.modalService.open(this.responseModal);
        }
      });
  }
}
