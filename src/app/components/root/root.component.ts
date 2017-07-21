import {Component} from '@angular/core';
import {ContactsService} from '../../services/contacts/contacts.service';
import {Contact} from '../../models/app.models';

@Component({
    selector: 'root',
    templateUrl: './root.component.html'
})
export class RootComponent {

    contacts: Contact[];

    constructor(private contactsService: ContactsService) {
    }

    ngOnInit(): void {
        this.contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        });
    }

    setSelection(node: Contact, selectedId: number) {
        if (node.id !== selectedId) {
            node.isSelected = false;
        } else {
            node.isSelected = true;
        }

        if (node.contacts) {
            for (let contact of node.contacts) {
                this.setSelection(contact, selectedId);
            }
        }
    }

    onSelectionChanged(node: Contact) {
        for (let contact of this.contacts) {
            this.setSelection(contact, node.id);
        }
    }
}
