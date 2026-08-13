"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type ZoomableImageProps = ImageProps;

export function ZoomableImage({ alt, ...props }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block h-full w-full cursor-zoom-in text-left"
        aria-label={`Agrandir : ${alt}`}
      >
        <Image {...props} alt={alt} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brown/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-cream px-4 py-2 text-sm font-bold text-brown shadow-lg transition hover:bg-cream-deep sm:right-8 sm:top-8"
            aria-label="Fermer l’image agrandie"
          >
            Fermer
          </button>
          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              {...props}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
