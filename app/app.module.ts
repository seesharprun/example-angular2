import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent } from './child.component';
import { ListComponent } from './list.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule
    ],
    declarations: [ 
        AppComponent,
        ChildComponent,
        ListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
