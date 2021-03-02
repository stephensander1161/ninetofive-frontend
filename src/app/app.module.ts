import { HowItWorksService } from "./services/how-it-works.service";
import { SubscriberService } from "./services/subscriber.service";
import { PromoService } from "./services/promo.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JobService } from "./services/job.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicStorageModule } from "@ionic/storage";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import "chartjs-plugin-zoom";
import { AboutService } from "./services/about.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: "exdb",
    }),

    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JobService,
    AboutService,
    HowItWorksService,
    PromoService,
    AuthService,
    AuthGuard,
    ReactiveFormsModule,
    SubscriberService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
