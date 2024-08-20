import React, { useState } from "react";
import Category from "./Category";
import { initialData } from "../data";

function Dashboard() {
  const [categories, setCategories] = useState(initialData.categories);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, widget],
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="dashboardContainer">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          onAddWidget={addWidget}
          onRemoveWidget={removeWidget}
        />
      ))}
    </div>
  );
}

export default Dashboard;
