//reorderItems function, which is responsible for rearranging the list of items when an arrow button is pressed.

import { ListItem } from "../model";

export const reorderItems = (
    items: ListItem[],
    index: number,
    direction: "up" | "down"
//The reorderItems function is responsible for rearranging the items in a list based on a reordering action (moving up or down). It accepts three parameters:
// 1 - items: ListItem[] - This is the array that represents the list of items that will be reordered. Each item must be of the ListItem type, previously defined in the model/index.ts file.
// 2 - index: number - Indicates the index of the item in the list that will be moved. This value must be within the valid range of the items array (between 0 and items.length - 1).
// 3 - direction: "up" | "down" - It is a literal string indicating the direction of movement: "up" to move the item one position up. "down" to move the item one position down.

): ListItem[] => { //Return: ListItem[] - Meaning: The function returns a new array (ListItem[]) with the items reordered, without modifying the original array (items).

    const newItems = [...items]; //Creating a new array - A new array is created with the spread operator ([...]) to ensure that the original array is not modified (immutability).
    if (direction === "up" && index > 0) { //If the direction is "up" and the index is greater than 0: Swaps the item at the index position with the item immediately above (index - 1).
        [newItems[index - 1], newItems[index]] = [
            newItems[index],
            newItems[index - 1],]; //Destructuring assignment allows the values ​​in two array positions to be swapped in a single line. The item newItems[index] is assigned to newItems[index - 1] and vice versa.

    } else if (direction === "down" && index < items.length - 1) { //If the direction is "down" and the index is less than the size of the list minus 1: Swaps the item at the index position with the item immediately below (index + 1).
        [newItems[index + 1], newItems[index]] = [
            newItems[index],
            newItems[index + 1],]; //Destructuring assignment allows the values ​​in two array positions to be swapped in a single line. The item newItems[index] is assigned to newItems[index + 1] and vice versa.
    }
    return newItems; //The updated array is returned with the items swapped positions.
};