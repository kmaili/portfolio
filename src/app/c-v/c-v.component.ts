import { Component } from '@angular/core';
import {PdfViewerModule} from "ng2-pdf-viewer";

@Component({
  selector: 'app-c-v',
  standalone: true,
  imports: [
    PdfViewerModule
  ],
  templateUrl: './c-v.component.html',
  styleUrl: './c-v.component.css'
})
export class CVComponent {
  resumePath: string = "../assets/resume.pdf";
}
