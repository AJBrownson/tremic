"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/escravos.jpg",
      caption: "ESCRAVOS, CHEVRON",
      width: 600,
      height: 800,
    },
    {
      src: "/exxon.jpg",
      caption: "EXXONMOBIL IBENO, AKWA IBOM",
      width: 800,
      height: 600,
    },
    {
      src: "/achimota.jpg",
      caption: "WATER BOARD ACHIMOTA, GHANA",
      width: 600,
      height: 800,
    },
    { src: "/owo.jpg", caption: "MTN OWO, ONDO", width: 800, height: 600 },
    {
      src: "/shagamu.jpg",
      caption: "CONSOLIDATED BREWERIES, SHAGAMU",
      width: 600,
      height: 800,
    },
    {
      src: "/asaba.jpg",
      caption: "GOVERNMENT HOUSE, ASABA",
      width: 800,
      height: 600,
    },
    { src: "/katsina.jpg", caption: "KATSINA STATE", width: 800, height: 600 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(({ src, caption, width, height }, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-72">
              <Image
                src={src}
                alt={caption}
                width={width}
                height={height}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 text-sm text-center font-kumbh text-gray-700 font-medium">
              {caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
