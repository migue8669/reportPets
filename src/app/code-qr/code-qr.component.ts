import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.component.html',
  styleUrls: ['./code-qr.component.css']
})
export class CodeQRComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  constructor() { }

  ngOnInit(): void {
  }

}
