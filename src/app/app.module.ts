import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActionsComponent } from './actions/actions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockchainService } from './services/blockchain.service';
import { MerchantdtComponent } from './merchantdt/merchantdt.component';
import { CustomerdtComponent } from './customerdt/customerdt.component';
import { RewarddtComponent } from './rewarddt/rewarddt.component';
import { TokendtComponent } from './tokendt/tokendt.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ActionsComponent,
    DashboardComponent,
    MerchantdtComponent,
    CustomerdtComponent,
    RewarddtComponent,
    TokendtComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
