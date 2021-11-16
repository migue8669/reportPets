import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from  '@angular/fire';
// import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CodeQRComponent } from './code-qr/code-qr.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CodeQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxQRCodeModule,
    FormsModule,
    HttpClientModule,
    // AngularFireAuthModule,
   //  AngularFireModule.initializeApp(environment.firebaseConfig),
 //    AngularFirestoreModule,
    // AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWKO1-r6f-pr-DWvw8ydfPSnMuwsUpwgo'    
   })
  ],
  providers: [
  //  AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
