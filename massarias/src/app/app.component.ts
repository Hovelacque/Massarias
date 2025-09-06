import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'massarias';
}
