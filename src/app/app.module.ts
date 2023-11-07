import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FileUploadComponent } from './file-upload/file-upload.component'; // Import du composant

@NgModule({
  declarations: [
    
    FileUploadComponent, // Déclaration du composant
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [FileUploadComponent],
})
export class AppModule {}
