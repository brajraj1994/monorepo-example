import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-component.component.html',
  styleUrl: './shared-component.component.css',
})
export class SharedComponentComponent {}
