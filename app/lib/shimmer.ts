const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F0EBE3" offset="0%" />
      <stop stop-color="#E8E1D8" offset="40%" />
      <stop stop-color="#F0EBE3" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#F0EBE3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)">
    <animate attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
  </rect>
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`;
