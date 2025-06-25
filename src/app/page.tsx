"use client";

import { useState } from "react";
import Image from "next/image";
// Import the specific event types and DragOverlay
import {
  DndContext,
  closestCenter,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { DraggableItem } from "@/components/DraggableItem";
import { Droppable } from "@/components/Droppable";

interface ClothingItem {
  id: string;
  src: string;
  alt: string;
}

interface Outfit {
  top: ClothingItem | null;
  bottom: ClothingItem | null;
  shoe: ClothingItem | null;
}

const clothingItems = {
  tops: [
    { id: "top1", src: "/tops/top1.webp", alt: "Striped Shirt" },
    { id: "top2", src: "/tops/top2.jpg", alt: "White T-shirt" },
    { id: "top3", src: "/tops/top3.jpg", alt: "Smiley Pattern T-shirt" },
    { id: "top4", src: "/tops/top4.png", alt: "Blue Pattern T-shirt" },
    { id: "top5", src: "/tops/top5.png", alt: "White Sleeveless Top" },
  ],
  bottoms: [
    { id: "bottom1", src: "/bottoms/bottom1.webp", alt: "Sample Bottom 1" },
    { id: "bottom2", src: "/bottoms/bottom2.webp", alt: "Sample Bottom 2" },
    { id: "bottom3", src: "/bottoms/bottom3.jpg", alt: "Sample Bottom 3" },
    { id: "bottom4", src: "/bottoms/bottom4.png", alt: "Sample Bottom 4" },
    { id: "bottom5", src: "/bottoms/bottom5.png", alt: "Sample Bottom 5" },
  ],
  shoes: [
    { id: "shoe1", src: "/shoes/shoes1.webp", alt: "Sample Shoe 1" },
    { id: "shoe2", src: "/shoes/shoes2.webp", alt: "Sample Shoe 2" },
    { id: "shoe3", src: "/shoes/shoes3.jpg", alt: "Sample Shoe 3" },
    { id: "shoe4", src: "/shoes/shoes4.jpg", alt: "Sample Shoe 4" },
    { id: "shoe5", src: "/shoes/shoes5.png", alt: "Sample Shoe 5" },
  ],
};

export default function Home() {
  const [activeItem, setActiveItem] = useState<ClothingItem | null>(null);
  const [outfit, setOutfit] = useState<Outfit>({
    top: null,
    bottom: null,
    shoe: null,
  });
  const [cart, setCart] = useState<Outfit[]>([]);
  const [savedOutfits, setSavedOutfits] = useState<Outfit[]>([]);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const allItems = [
      ...clothingItems.tops,
      ...clothingItems.bottoms,
      ...clothingItems.shoes,
    ];
    const foundItem = allItems.find((i) => i.id === active.id);
    if (foundItem) {
      setActiveItem(foundItem);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over) {
      const allItems = [
        ...clothingItems.tops,
        ...clothingItems.bottoms,
        ...clothingItems.shoes,
      ];
      const draggedItem = allItems.find((item) => item.id === active.id);
      if (draggedItem) {
        let itemCategory: keyof Outfit | null = null;
        if (clothingItems.tops.some((item) => item.id === draggedItem.id))
          itemCategory = "top";
        else if (
          clothingItems.bottoms.some((item) => item.id === draggedItem.id)
        )
          itemCategory = "bottom";
        else if (clothingItems.shoes.some((item) => item.id === draggedItem.id))
          itemCategory = "shoe";
        if (itemCategory) {
          setOutfit((prevOutfit) => ({
            ...prevOutfit,
            [itemCategory]: draggedItem,
          }));
        }
      }
    }
    setActiveItem(null);
  }

  function handleReset() {
    setOutfit({
      top: null,
      bottom: null,
      shoe: null,
    });
  }

  function handleAddToCart() {
    if (outfit.top && outfit.bottom && outfit.shoe) {
      setCart((prevCart) => {
        const newCart = [...prevCart, outfit];
        console.log("Current Cart:", newCart);
        return newCart;
      });

      alert("Success! Outfit added to your cart.");
      handleReset();
    } else {
      alert("Please select a top, bottom, and shoe before adding to cart.");
    }
  }

  function handleSaveOutfit() {
    if (outfit.top && outfit.bottom && outfit.shoe) {
      setSavedOutfits((prevSaved) => {
        const newSavedOutfits = [...prevSaved, outfit];
        console.log("Saved Outfits:", newSavedOutfits);
        return newSavedOutfits;
      });

      alert("Success! Outfit saved.");

      handleReset();
    } else {
      alert("Please select a top, bottom, and shoe to save the outfit.");
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="md:h-screen md:flex md:flex-col font-sans bg-gray-100">
        <header className="border-b bg-white shadow-sm sticky top-0 z-20">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <h1 className="text-3xl font-bold text-gray-800">
                Outfit Builder
              </h1>
            </div>
          </div>
        </header>

        <main className="flex-1 md:flex md:flex-row md:gap-8 md:max-w-screen-2xl md:mx-auto md:w-full md:p-4 md:sm:p-6 md:lg:p-8 md:overflow-hidden pb-48 md:pb-0">
          <aside className="w-full md:w-80 lg:w-96 bg-white md:rounded-lg md:shadow-sm md:border flex flex-col p-4 md:p-0">
            <div className="md:space-y-8 md:p-4 md:overflow-y-auto">
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Tops
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                  {clothingItems.tops.map((item) => (
                    <DraggableItem
                      key={item.id}
                      id={item.id}
                      src={item.src}
                      alt={item.alt}
                      isDragging={activeItem?.id === item.id}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Bottoms
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                  {clothingItems.bottoms.map((item) => (
                    <DraggableItem
                      key={item.id}
                      id={item.id}
                      src={item.src}
                      alt={item.alt}
                      isDragging={activeItem?.id === item.id}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Shoes
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                  {clothingItems.shoes.map((item) => (
                    <DraggableItem
                      key={item.id}
                      id={item.id}
                      src={item.src}
                      alt={item.alt}
                      isDragging={activeItem?.id === item.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 flex-col gap-8 mt-8 md:mt-0 md:flex">
            <section className="flex-1 md:overflow-y-auto p-1">
              <Droppable
                id="desktop-canvas"
                className="w-full min-h-[50vh] md:min-h-full rounded-lg shadow-sm border p-4 flex flex-col items-center justify-start gap-2"
              >
                {outfit.top ? (
                  <Image
                    src={outfit.top.src}
                    alt={outfit.top.alt}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-36 h-36 border-2 border-dashed rounded-md flex items-center justify-center text-gray-400">
                    Top
                  </div>
                )}
                {outfit.bottom ? (
                  <Image
                    src={outfit.bottom.src}
                    alt={outfit.bottom.alt}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-36 h-36 border-2 border-dashed rounded-md flex items-center justify-center text-gray-400">
                    Bottom
                  </div>
                )}
                {outfit.shoe ? (
                  <Image
                    src={outfit.shoe.src}
                    alt={outfit.shoe.alt}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-36 h-36 border-2 border-dashed rounded-md flex items-center justify-center text-gray-400">
                    Shoe
                  </div>
                )}
              </Droppable>
            </section>

            <footer className="hidden md:block bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handleReset}
                  className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Reset
                </button>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSaveOutfit}
                    className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Save Outfit
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="bg-black text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <span>🛒</span> Add to Cart
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>

      <DragOverlay>
        {activeItem ? (
          <DraggableItem
            id={activeItem.id}
            src={activeItem.src}
            alt={activeItem.alt}
          />
        ) : null}
      </DragOverlay>

      <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-2 flex flex-col gap-2 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <Droppable
            id="mobile-top"
            className="h-20 border rounded-md flex items-center justify-center bg-gray-50 p-1"
          >
            {outfit.top ? (
              <Image
                src={outfit.top.src}
                alt={outfit.top.alt}
                width={60}
                height={60}
                className="object-contain h-full"
              />
            ) : (
              <p className="text-xs text-gray-400">Top</p>
            )}
          </Droppable>
          <Droppable
            id="mobile-bottom"
            className="h-20 border rounded-md flex items-center justify-center bg-gray-50 p-1"
          >
            {outfit.bottom ? (
              <Image
                src={outfit.bottom.src}
                alt={outfit.bottom.alt}
                width={60}
                height={60}
                className="object-contain h-full"
              />
            ) : (
              <p className="text-xs text-gray-400">Bottom</p>
            )}
          </Droppable>
          <Droppable
            id="mobile-shoe"
            className="h-20 border rounded-md flex items-center justify-center bg-gray-50 p-1"
          >
            {outfit.shoe ? (
              <Image
                src={outfit.shoe.src}
                alt={outfit.shoe.alt}
                width={60}
                height={60}
                className="object-contain h-full"
              />
            ) : (
              <p className="text-xs text-gray-400">Shoes</p>
            )}
          </Droppable>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleReset}
            className="border border-gray-300 rounded-md p-2 text-sm text-center hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            onClick={handleSaveOutfit}
            className="border border-gray-300 rounded-md p-2 text-sm text-center hover:bg-gray-100"
          >
            Save Outfit
          </button>
          <button
            onClick={handleAddToCart}
            className="col-span-2 bg-black text-white rounded-md p-2 text-sm font-semibold hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <span>🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </DndContext>
  );
}
