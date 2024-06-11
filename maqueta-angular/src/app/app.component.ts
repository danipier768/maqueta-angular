import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponentComponent } from './components/head-component/head-component.component';
import { BodyOneComponentComponent } from './components/body-one-component/body-one-component.component';
import { BodyLineComponentComponent } from './components/body-line-component/body-line-component.component';
import { BodyThreComponentComponent } from './components/body-thre-component/body-thre-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponentComponent, BodyOneComponentComponent, BodyLineComponentComponent, BodyThreComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maqueta-angular';
}
