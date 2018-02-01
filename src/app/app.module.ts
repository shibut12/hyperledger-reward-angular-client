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
import { CreateMerchantComponent } from './dialogs/create-merchant/create-merchant.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './dialogs/create-customer/create-customer.component';
import { CreateTokenComponent } from './dialogs/create-token/create-token.component';

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
    CreateMerchantComponent,
    CreateCustomerComponent,
    CreateTokenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateMerchantComponent,
    CreateCustomerComponent,
    CreateTokenComponent
  ]
})
export class AppModule { }
