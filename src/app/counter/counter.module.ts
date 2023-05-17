import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// El export sirve para exportar al mundo exterior pero de por si viene portejido

@NgModule({

  declarations:[
    CounterComponent
   ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
