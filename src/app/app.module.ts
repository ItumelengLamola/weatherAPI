import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { StationsModule } from './modules/stations/stations.module';
import { HttpClientModule} from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { StationFilterPipe } from './modules/stations/station-filter.pipe';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { StationService } from './modules/shared/station.service';
import { FileUploadModule } from 'ng2-file-upload';


// Firebase
import { AngularFireModule } from '@angular/fire';
import {  AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UploadComponent,
    StationFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FileUploadModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'WeatherAPI')
  ],
  
  providers: [StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
