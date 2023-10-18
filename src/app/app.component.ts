import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public userProfileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  public updateUserProfile(): void {
    // Logic to update the user will go here, but for now, we'll just log the values
    console.log(
      this.userProfileForm.controls.first_name.value,
      this.userProfileForm.controls.last_name.value
    );
  }
}
