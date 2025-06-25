import React from "react";
import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";

// This defines the "props" or data that our component will accept.
interface DraggableItemProps {
  id: string;
  src: string;
  alt: string;
  isDragging?: boolean;
}

export function DraggableItem({
  id,
  src,
  alt,
  isDragging,
}: DraggableItemProps) {
  // Here we use the main hook from Dnd Kit
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { src, alt },
  });

  // This style will make the item move on the screen as we drag it
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 100, // Ensure the dragged item appears on top of other elements
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`border rounded-lg p-2 hover:shadow-lg transition-shadow cursor-pointer md:cursor-grab bg-white ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-contain w-full h-full touch-none" // 'touch-none' helps with mobile dragging
        draggable="false" // Prevent native browser image dragging
      />
    </div>
  );
}
