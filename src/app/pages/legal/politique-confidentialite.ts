import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politique-confidentialite.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolitiqueConfidentialite {}
