import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NavigationComponent } from './comps/general/navigation/navigation.component';
import { BirdsPanelComponent } from './comps/panel/birds-panel/birds-panel.component';
import { BeastPanelComponent } from './comps/panel/beast-panel/beast-panel.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { PageinatorComponent } from './comps/general/pageinator/pageinator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BirdsPanelComponent,
    BeastPanelComponent,
    FooterComponent,
    PageinatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
