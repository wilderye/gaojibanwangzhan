
import { Artwork, ExhibitionInfo } from './types';

export const EXHIBITION_INFO: ExhibitionInfo = {
  artistName: "Aris Chen",
  exhibitionTitle: "The Resonance of Silence",
  curatorialStatement: "A journey through the intersection of digital ephemerality and physical permanence. This exhibition explores how light captures the essence of fleeting moments, turning them into eternal memories. Each piece is a fragment of a larger dialogue between the observer and the observed.",
  duration: "Spring 2024 - Graduate Showcase"
};

export const ARTWORKS: Artwork[] = [
  {
    id: "01",
    title: "Celestial Echo",
    category: "Generative Art",
    year: "2024",
    description: "An exploration of algorithmic patterns mimicking natural nebular structures.",
    imageUrl: "https://picsum.photos/seed/art1/1200/1600",
    dimensions: "Digital Projection",
    medium: "Custom Shader Engine"
  },
  {
    id: "02",
    title: "Fragments of Time",
    category: "Digital Photography",
    year: "2023",
    description: "Capturing the stillness within the movement of high-speed urban transit.",
    imageUrl: "https://picsum.photos/seed/art2/1600/1000",
    dimensions: "120 x 80 cm",
    medium: "Fine Art Giclée Print"
  },
  {
    id: "03",
    title: "Organic Architecture",
    category: "3D Sculpture",
    year: "2024",
    description: "Bio-morphic structures rendered to challenge the perception of weight.",
    imageUrl: "https://picsum.photos/seed/art3/1200/1400",
    dimensions: "AR Interactive",
    medium: "WebGL / Three.js"
  },
  {
    id: "04",
    title: "Shadows in Motion",
    category: "Mixed Media",
    year: "2023",
    description: "The interplay of digital shadows cast by virtual light sources.",
    imageUrl: "https://picsum.photos/seed/art4/1000/1500",
    dimensions: "Variable",
    medium: "Interactive Installation"
  },
  {
    id: "05",
    title: "Ephemeral Horizon",
    category: "Digital Painting",
    year: "2024",
    description: "A meditative study on the colors of the horizon during twilight.",
    imageUrl: "https://picsum.photos/seed/art5/1600/900",
    dimensions: "200 x 100 cm",
    medium: "Digital Canvas"
  }
];
