import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Droppable({ id, children, className }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  // Combine the base classes with a conditional class for the highlight
  const combinedClassName = `
    ${className} 
    ${isOver ? "bg-emerald-100 border-emerald-400" : "bg-white"}
    transition-colors duration-200
  `;

  return (
    <div ref={setNodeRef} className={combinedClassName}>
      {children}
    </div>
  );
}
