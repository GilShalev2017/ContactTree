import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../../models/app.models';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    @Input() contact: Contact;
    @Output() selectionChanged = new EventEmitter<Contact>();

    changeState(event) {
        this.contact.state = !this.contact.state;
        this.selectionChanged.emit(this.contact);
    }

    onSelectionChanged(node: Contact) {
        this.selectionChanged.emit(node);
    }
}
