// Modules (imports)
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RootComponent}  from './components/root/root.component';
import {ContactComponent}  from './components/contact/contact.component';
// Services (providers)
import {ContactsService} from './services/contacts/contacts.service';
import {ToastService} from './services/toast/toast.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule ],
    declarations: [RootComponent, ContactComponent],
    providers: [ContactsService, ToastService],
    bootstrap: [RootComponent]
})
export class AppModule {
}
