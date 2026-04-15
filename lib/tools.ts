import {
  Image,
  FileImage,
  Scissors,
  RefreshCw,
  Type,
  Ruler,
  FileText,
  LayoutGrid,
  Hash,
  BookOpen,
  FileType,
  QrCode,
  Barcode,
  Tag,
  Regex,
  Palette,
  Pipette,
  Rainbow,
  PenLine,
  LucideIcon,
  Crop,
  Square,
  GalleryVertical,
  Stamp,
  Sparkles,
  Contrast,
  Eye,
  Eraser,
  Library,
  Blend,
  Calculator,
  LineChart,
  Variable,
  Binary,
  Clock,
  Scale,
  FileCode,
  ScanLine,
  Slice,
  FileSearch,
  Languages,
  Layers,
  ClipboardPaste,
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  beta?: boolean;
  new?: boolean;
}

export interface ToolCategory {
  id: string;
  name: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    id: "social-media",
    name: "Social Media",
    tools: [
      {
        id: "social-cropper",
        name: "Social Media Cropper",
        description: "Crop images for Instagram, Bluesky & Threads",
        icon: Crop,
        href: "/tools/social-cropper.html",
      },
      {
        id: "matte-generator",
        name: "Matte Generator",
        description: "Put non-square images on a square matte",
        icon: Square,
        href: "/tools/matte-generator.html",
      },
      {
        id: "scroll-generator",
        name: "Seamless Scroll Generator",
        description: "Split images for Instagram carousel scrolls",
        icon: GalleryVertical,
        href: "/tools/scroll-generator.html",
      },
      {
        id: "watermarker",
        name: "Watermarker",
        description: "Add watermarks to images",
        icon: Stamp,
        href: "/tools/watermarker.html",
      },
    ],
  },
  {
    id: "colour",
    name: "Colour",
    tools: [
      {
        id: "colour-converter",
        name: "Colour Converter",
        description: "Convert between colour formats",
        icon: Pipette,
        href: "/tools/colour-converter.html",
      },
      {
        id: "tailwind-shades",
        name: "Tailwind Shade Generator",
        description: "Generate Tailwind colour scales",
        icon: Palette,
        href: "/tools/tailwind-shades.html",
      },
      {
        id: "harmony-genny",
        name: "Harmony Generator",
        description: "Generate colour harmonies",
        icon: Rainbow,
        href: "/tools/harmony-genny.html",
      },
      {
        id: "palette-genny",
        name: "Palette Generator",
        description: "Generate beautiful colour palettes",
        icon: PenLine,
        href: "/tools/palette-genny.html",
      },
      {
        id: "palette-collection",
        name: "Palette Collection",
        description: "Browse curated colour palettes",
        icon: Library,
        href: "/tools/palette-collection.html",
      },
      {
        id: "contrast-checker",
        name: "Contrast Checker",
        description: "Check WCAG colour contrast compliance",
        icon: Contrast,
        href: "/tools/contrast-checker.html",
      },
      {
        id: "colorblind-sim",
        name: "Colour Blindness Simulator",
        description: "Simulate how colours appear to colour blind users",
        icon: Eye,
        href: "/tools/colorblind-sim.html",
      },
      {
        id: "gradient-genny",
        name: "Gradient Generator",
        description: "Create linear, corner, and mesh gradients",
        icon: Blend,
        href: "/tools/gradient-genny.html",
        new: true,
      },
    ],
  },
  {
    id: "img-assets",
    name: "Images & Assets",
    tools: [
      {
        id: "favicon-genny",
        name: "Favicon Generator",
        description: "Generate favicons from any image",
        icon: Image,
        href: "/tools/favicon-genny.html",
      },
      {
        id: "svg-optimiser",
        name: "SVG Optimiser",
        description: "Optimise and minify SVG files",
        icon: FileImage,
        href: "/tools/svg-optimiser.html",
      },
      {
        id: "placeholder-genny",
        name: "Placeholder Generator",
        description: "Generate placeholder images",
        icon: LayoutGrid,
        href: "/tools/placeholder-genny.html",
      },
      {
        id: "image-splitter",
        name: "Image Splitter",
        description: "Split images into tiles",
        icon: Scissors,
        href: "/tools/image-splitter.html",
      },
      {
        id: "image-converter",
        name: "Image Converter",
        description: "Convert between PNG, JPEG, WebP, AVIF, GIF, BMP, TIFF, ICO, ICNS with resize and format options",
        icon: RefreshCw,
        href: "/tools/image-converter.html",
      },
      {
        id: "artwork-enhancer",
        name: "Artwork Enhancer",
        description: "Add colour noise overlay to artwork",
        icon: Sparkles,
        href: "/tools/artwork-enhancer.html",
      },
      {
        id: "image-tracer",
        name: "Image Tracer",
        description: "Trace raster images to SVG vectors",
        icon: ScanLine,
        href: "/tools/image-tracer.html",
        new: true,
      },
      {
        id: "paste-image",
        name: "Paste Image",
        description: "Paste and download an image from your clipboard",
        icon: ClipboardPaste,
        href: "/tools/paste-image.html",
      },
      {
        id: "image-clipper",
        name: "Image Clipper",
        description: "Trim transparent edges from PNGs to the smallest dimensions",
        icon: Crop,
        href: "/tools/image-clipper.html",
        new: true,
      },
    ],
  },
  {
    id: "typo-text",
    name: "Typography & Text",
    tools: [
      {
        id: "px-to-rem",
        name: "PX to REM",
        description: "Convert pixels to rem units",
        icon: Ruler,
        href: "/tools/px-to-rem.html",
      },
      {
        id: "line-height-calc",
        name: "Line Height Calculator",
        description: "Calculate optimal line heights",
        icon: Type,
        href: "/tools/line-height-calc.html",
      },
      {
        id: "typo-calc",
        name: "Typography Calculator",
        description: "Convert between typographic units",
        icon: Hash,
        href: "/tools/typo-calc.html",
      },
      {
        id: "paper-sizes",
        name: "Paper Sizes",
        description: "Reference for paper dimensions",
        icon: FileText,
        href: "/tools/paper-sizes.html",
      },
      {
        id: "word-counter",
        name: "Word Counter",
        description: "Count words, characters and more",
        icon: BookOpen,
        href: "/tools/word-counter.html",
      },
      {
        id: "glyph-browser",
        name: "Glyph Browser",
        description: "Browse unicode glyphs",
        icon: Type,
        href: "/tools/glyph-browser.html",
      },
      {
        id: "font-explorer",
        name: "Font File Explorer",
        description: "Explore font file contents",
        icon: FileType,
        href: "/tools/font-explorer.html",
      },
    ],
  },  
  {
    id: "other-tools",
    name: "Other Tools",
    tools: [
      {
        id: "markdown-writer",
        name: "Text Scratchpad",
        description: "Text editor with manipulation tools",
        icon: PenLine,
        href: "/tools/markdown-writer.html",
      },
      {
        id: "tailwind-cheatsheet",
        name: "Tailwind Cheat Sheet",
        description: "Quick reference for Tailwind classes",
        icon: BookOpen,
        href: "/tools/tailwind-cheatsheet.html",
      },
      {
        id: "qr-genny",
        name: "QR Generator",
        description: "Generate styled QR codes with custom colors, shapes, and logos",
        icon: QrCode,
        href: "/tools/qr-genny.html",
      },
      {
        id: "code-genny",
        name: "Barcode Generator",
        description: "Generate Data Matrix, Aztec, PDF417, Code 128, EAN-13, and more",
        icon: Barcode,
        href: "/tools/code-genny.html",
      },
      {
        id: "meta-tag-genny",
        name: "Meta Tag Generator",
        description: "Generate HTML meta tags",
        icon: Tag,
        href: "/tools/meta-tag-genny.html",
      },
      {
        id: "regex-tester",
        name: "Regex Tester",
        description: "Test regular expressions",
        icon: Regex,
        href: "/tools/regex-tester.html",
      },
    ],
  },
  {
    id: "calculators",
    name: "Calculators",
    tools: [
      {
        id: "sci-calc",
        name: "Scientific Calculator",
        description: "Full-featured scientific calculator with history",
        icon: Calculator,
        href: "/tools/sci-calc.html",
      },
      {
        id: "graph-calc",
        name: "Graph Calculator",
        description: "Plot and visualise mathematical functions",
        icon: LineChart,
        href: "/tools/graph-calc.html",
      },
      {
        id: "algebra-calc",
        name: "Algebra Calculator",
        description: "Symbolic algebra: simplify, factor, solve, derivatives",
        icon: Variable,
        href: "/tools/algebra-calc.html",
      },
      {
        id: "base-converter",
        name: "Base Converter",
        description: "Convert between decimal, hex, binary, and octal",
        icon: Binary,
        href: "/tools/base-converter.html",
      },
      {
        id: "time-calc",
        name: "Time Calculator",
        description: "Unix timestamps, date arithmetic, timezone conversion",
        icon: Clock,
        href: "/tools/time-calc.html",
      },
      {
        id: "unit-converter",
        name: "Unit Converter",
        description: "Convert between units of length, weight, data, and more",
        icon: Scale,
        href: "/tools/unit-converter.html",
      },
      {
        id: "encoder",
        name: "Encoding Tools",
        description: "Base64, URL encoding, and hash generation",
        icon: FileCode,
        href: "/tools/encoder.html",
      },
    ],
  },  
];

export const allTools = toolCategories.flatMap((category) => category.tools);

// Featured tools for "Delphi's Greatest Hits" section
export const featuredToolIds = ["qr-genny", "palette-genny", "background-remover"];
export const featuredTools = featuredToolIds
  .map((id) => allTools.find((tool) => tool.id === id))
  .filter((tool): tool is Tool => tool !== undefined);

export function getToolById(id: string): Tool | undefined {
  return allTools.find((tool) => tool.id === id);
}

export function getCategoryByToolId(id: string): ToolCategory | undefined {
  return toolCategories.find((category) =>
    category.tools.some((tool) => tool.id === id)
  );
}
