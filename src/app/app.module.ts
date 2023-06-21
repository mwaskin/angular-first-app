import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';

/* Angular class decorator that provides configuration metadata to the AppModule bootstrapped in main.ts */
@NgModule({
  /* Any components instantiated in the app's component tree must be registered in the declarations array */
  declarations: [AppComponent, ServerComponent, ServersComponent],
  /* Access functionality of other modules, such as those built into Angular */
  imports: [BrowserModule, FormsModule],
  providers: [],
  /* Tells Angular which component should be rendered when the app starts; basically which component's selector Angular should look for in the root index.html file */
  bootstrap: [AppComponent],
})
export class AppModule {}
