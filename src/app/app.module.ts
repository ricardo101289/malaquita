import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaquitaSubheaderComponent } from './components/maquita-subheader/maquita-subheader.component';
import { LayoutCardComponent } from './components/layout-card/layout-card.component';
import { CardComponent } from './components/card/card.component';
import { BtnComponent } from './components/btn/btn.component';
import { HouseTypeComponent } from './components/house-type/house-type.component';
import { AmbientesComponent } from './components/ambientes/ambientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MaquitaSubheaderComponent,
    LayoutCardComponent,
    CardComponent,
    BtnComponent,
    HouseTypeComponent,
    AmbientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
