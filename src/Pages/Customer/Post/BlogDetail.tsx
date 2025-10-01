import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { EmblaCarouselType } from "embla-carousel";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

const BlogDetail = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    }
  };

  return (
    <>
      <div className="flex flex-col md:grid grid-cols-2 max-w-6xl mx-auto">
        <div className="px-4">
          {/* Post Gallery */}
          <div className="relative flex flex-col md:flex-row gap-4 mb-6">
            {/* Carousel Div */}
            <div className="flex-1 order-1 md:order-2  bg-red-500 ">
              {/* Carousel Part */}
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div
                      className="max-h-[460px] aspect-square border-0 overflow-hidden"
                      onMouseEnter={() => setIsZoomed(true)}
                      onMouseLeave={() => setIsZoomed(false)}
                      onMouseMove={handleMouseMove}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                        alt=""
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-200 ${
                          isZoomed && "scale-175"
                        }`}
                        style={
                          isZoomed
                            ? {
                                transformOrigin: `${mousePosition.x * 100}% ${
                                  mousePosition.y * 100
                                }%`,
                              }
                            : {}
                        }
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative max-h-[460px] aspect-square border-0 overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                        alt=""
                        className="w-full h-full object-cover rounded-lg transition-transform duration-200"
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative max-h-[460px] aspect-square border-0 overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                        alt=""
                        className="w-full h-full object-cover rounded-lg transition-transform duration-200"
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative max-h-[460px] aspect-square border-0 overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                        alt=""
                        className="w-full h-full object-cover rounded-lg transition-transform duration-200"
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative max-h-[460px] aspect-square border-0 overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                        alt=""
                        className="w-full h-full object-cover rounded-lg transition-transform duration-200"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Scroll area Thumbnail Part */}
            <ScrollArea className="order-2 md:order-1 w-full md:w-24 h-24 md:h-[460px]">
              <div className="flex md:flex-col gap-2 p-1">
                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2"

                  // onClick={() => setSelectedIndex(index)}
                  // className={cn(
                  //   "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2",
                  //   selectedIndex === index
                  //     ? "border-primary"
                  //     : "border-transparent hover:border-primary/50"
                  // )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        <div className="text-black  my-auto px-4">
          The Transparent RGB Wireless Gaming Controller is the perfect blend of
          aesthetics and functionality for gamers of all levels. Featuring a
          sleek transparent design, this controller not only looks great but
          also allows you to see its internal components, adding a unique touch
          to your gaming setup. Equipped with advanced wireless technology, this
          controller offers a seamless connection to your gaming console or PC.
          The ergonomic design ensures a comfortable grip during long gaming
          sessions, while the RGB lighting can be customized to match your
          gaming environment. Experience responsive gameplay with low latency
          and precise controls, making every action feel fluid. Whether you're
          exploring open worlds or engaging in fast-paced combat, this gaming
          controller enhances your overall gaming experience. Compatible with
          multiple platforms, it’s versatile enough to meet the needs of any
          gamer. Elevate your gaming experience with the Transparent RGB
          Wireless Gaming Controller today!
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
