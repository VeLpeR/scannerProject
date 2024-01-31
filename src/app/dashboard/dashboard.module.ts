import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardAfterScanComponent } from './dashboard-after-scan/dashboard-after-scan.component';
import {MatTabsModule} from '@angular/material/tabs'
@NgModule({
  declarations: [DashboardComponent, DashboardAfterScanComponent],
  imports: [
    CommonModule,NgxBarcodeScannerModule,DashboardRoutingModule,MatTabsModule
  ]
})
export class DashboardModule { }
