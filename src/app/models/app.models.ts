export interface Contact {
    id: number;
    name: string;
    type: string;
    contacts?: Contact[];
    state: boolean;
    isSelected?: boolean;
}
//
// export interface Group {
//     id: number;
//     name: string;
//     type: string;
//
// }
