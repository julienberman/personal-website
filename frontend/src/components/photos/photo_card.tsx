import Image from "next/image";

export function PhotoCard() {
  return (
    <div className="rounded-md border border-border bg-card p-1">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-border bg-muted">
        <Image
          src="/headshot.jpg"
          alt="Headshot of Julien Berman"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 80vw, 320px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
