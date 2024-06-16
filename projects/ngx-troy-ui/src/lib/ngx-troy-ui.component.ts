import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'troy-ngx-troy-ui',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <p>
      ngx-troy-ui works!
    </p>
  `,
  styles: ``
})
export class NgxTroyUiComponent {

}
