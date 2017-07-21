"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const contacts_service_1 = require("../../services/contacts/contacts.service");
let RootComponent = class RootComponent {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    ngOnInit() {
        this.contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        });
    }
    setSelection(node, selectedId) {
        if (node.id !== selectedId) {
            node.isSelected = false;
        }
        else {
            node.isSelected = true;
        }
        if (node.contacts) {
            for (let contact of node.contacts) {
                this.setSelection(contact, selectedId);
            }
        }
    }
    onSelectionChanged(node) {
        for (let contact of this.contacts) {
            this.setSelection(contact, node.id);
        }
    }
};
RootComponent = __decorate([
    core_1.Component({
        selector: 'root',
        templateUrl: './root.component.html'
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], RootComponent);
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map