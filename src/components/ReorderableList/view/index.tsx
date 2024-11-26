//JSX code that displays the list of items along with the up and down arrow buttons. When the user clicks a button, the controller reordering function is called.

import React from "react";
import { ReorderableListProps } from "../model";
import { reorderItems } from "../controller";

const ReorderableList: React.FC<ReorderableListProps> = ({ items, onReorder }) => { //ReorderableList is a functional component (React Functional Component or React.FC). It receives the following props: items - An array of items of type ListItem (defined in the model). onReorder - A function that will be called with the updated array whenever an item is reordered.

    const handleReorder = (index: number, direction: "up" | "down") => {
        const newItems = reorderItems(items, index, direction);
        onReorder(newItems);
    }; //Gets the item's index and the direction of movement ("up" or "down"). Uses the controller's reorderItems function to get the new reordered array. Calls the onReorder function, which was passed as a prop, to notify the parent component about the new order.

    return (
        <div>
            {items.map((item, index) => ( //The list of items is rendered dynamically with the ".map" method.
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        width: "400px"
                    }}
                >

                    {/* Item content */}
                    <span style={{ flex: 1, padding: "0 10px" }}>
                        {item.content}
                    </span>

                    {/* The up arrow button (↑) only appears for items that are not the first in the list (index > 0). */}
                    {index > 0 && (
                        <button onClick={() => handleReorder(index, "up")}> {/* Call handleReorder with direction: "up" to move the item up. */}
                            &#8593;
                        </button>
                    )}

                    {/* The down arrow button (↓) only appears for items that are not the last in the list (index < items.length - 1). */}
                    {index < items.length - 1 && (
                        <button onClick={() => handleReorder(index, "down")}> {/* Call handleReorder with direction: "down" to move the item down. */}
                            &#8595;
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReorderableList;
