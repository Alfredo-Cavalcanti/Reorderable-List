//defines interfaces for item and list typing.

export interface ListItem {
    id: string;
    content: string;
} 
//describes the items that will be shown in the list.

export interface ReorderableListProps {
    items: ListItem[]; //items is a property that expects an array ([]) of ListItem objects
    onReorder: (items: ListItem[]) => void; //onReorder is a function that the component expects to receive as a property. This function takes a single parameter an array of ListItem[]. Does not return any value (=> void).
} 
//describes the properties that the ReorderableList component will receive.