import React, { useState } from "react";

function AddWidgetForm({ categoryId, onAddWidget }) {
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [widgetGraph, setWidgetGraph] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      content: widgetContent,
      graphImg: widgetGraph,
    };
    onAddWidget(categoryId, newWidget);
    setWidgetName("");
    setWidgetContent("");
    setWidgetGraph("");
  };

  return (
    <form onSubmit={handleSubmit} className="addWidgetForm">
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
        required
      />
      <input
        type="text"
        value={widgetGraph}
        onChange={(e) => setWidgetGraph(e.target.value)}
        placeholder="Widget Graph Url"
      />
      <input
        type="text"
        value={widgetContent}
        onChange={(e) => setWidgetContent(e.target.value)}
        placeholder="Widget Content"
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
}

export default AddWidgetForm;
