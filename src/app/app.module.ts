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
import { MapComponent } from './components/map/map.component';
import { TypeHousesComponent } from './components/type-houses/type-houses.component';
import { ImagesReferentComponent } from './components/images-referent/images-referent.component';
import { QualityAndguaranteeComponent } from './components/quality-andguarantee/quality-andguarantee.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AmbientesComponent,
    MapComponent,
    TypeHousesComponent,
    ImagesReferentComponent,
    QualityAndguaranteeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
