import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

function Category({ category, onAddWidget, onRemoveWidget }) {
    return (
        <div className="categoryContainer">
            <h2>{category.name}</h2>
            <div className="widgetsContainer">
                <div className="widgetsContainer">
                    {category.widgets.map((widget) => (
                        <Widget
                            key={widget.id}
                            widget={widget}
                            onRemove={() => onRemoveWidget(category.id, widget.id)}
                        />
                    ))}
                </div>
                <AddWidgetForm categoryId={category.id} onAddWidget={onAddWidget} />
            </div>

        </div>
    );
}

export default Category;
