import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  recipientEmail: string = '';
  expiration: number | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      this.selectedFile = inputElement.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile && this.expiration !== null) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('expiration', this.expiration.toString());
      formData.append('recipientEmail', this.recipientEmail);

      this.fileUploadService.uploadFile(formData).subscribe(
        () => {
          console.log('Fichier téléversé avec succès');
          // Afficher les liens de téléchargement dans l'interface utilisateur
        },
        (error) => {
          console.error('Erreur lors du téléversement du fichier', error);
        }
      );
    }
  }

  calculateExpirationDate(): Date | null {
    if (this.expiration !== null) {
      const currentDate = new Date();
      if (this.expiration === 1) {
        currentDate.setDate(currentDate.getDate() + 1);
      } else if (this.expiration === 30) {
        currentDate.setMonth(currentDate.getMonth() + 1);
      } else if (this.expiration === 365) {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      } else {
        return null;
      }
      return currentDate;
    }
    return null;
  }
}
