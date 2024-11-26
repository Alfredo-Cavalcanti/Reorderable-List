import React from "react";
import ReorderableListContainer from "./components/ReorderableList";

const App: React.FC = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Reorderable List Example</h1>
            <ReorderableListContainer />
        </div>
    );
};

export default App;
