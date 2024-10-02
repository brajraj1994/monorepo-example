import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-library.component.html',
  styleUrl: './shared-library.component.css',
})
export class SharedLibraryComponent {}
