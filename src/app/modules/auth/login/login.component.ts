import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule, CardModule, ButtonModule, InputTextModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  activeTab: string = "mobile";

  constructor(
    private _router: Router
  ) {

  }

  // toggle tab
  toggleTab(tab: string): void {
    this.activeTab = tab;
  }

  // login by mobile number
  loginByMobileNumber() {
    this._router.navigate(["/admin/dashboard"]);
  }
}
