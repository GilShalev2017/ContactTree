// Modules (imports)
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RootComponent}  from './components/root/root.component';
import {ContactComponent}  from './components/contact/contact.component';
// Services (providers)
import {ContactsService} from './services/contacts/contacts.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule ],
    declarations: [RootComponent, ContactComponent],
    providers: [ContactsService],
    bootstrap: [RootComponent]
})
export class AppModule {
}
