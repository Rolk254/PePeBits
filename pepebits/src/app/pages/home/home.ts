import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackOpenerComponent } from '../../components/pack-opener/pack-opener';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PackOpenerComponent], // <- IMPORTANTE
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
