
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
    // Updated to use your local file
    imageUrl: "images/cover1.jpg",
    dimensions: "Digital Projection",
    medium: "Custom Shader Engine"
  },
  {
    id: "02",
    title: "Fragments of Time",
    category: "Digital Photography",
    year: "2023",
    description: "Capturing the stillness within the movement of high-speed urban transit.",
    // Updated to use your local file
    imageUrl: "images/cover2.jpg",
    dimensions: "120 x 80 cm",
    medium: "Fine Art Giclée Print"
  },
  {
    id: "03",
    title: "Organic Architecture",
    category: "3D Sculpture",
    year: "2024",
    description: "Bio-morphic structures rendered to challenge the perception of weight.",
    imageUrl: "https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251219/289be780ce5fe33f34e0dfe5cd6f4f765a3b1d1e.jpg",
    dimensions: "AR Interactive",
    medium: "WebGL / Three.js"
  },
  {
    id: "04",
    title: "Shadows in Motion",
    category: "Mixed Media",
    year: "2023",
    description: "The interplay of digital shadows cast by virtual light sources.",
    imageUrl: "https://static.eeo.cn/upload/file/20251219/1766078403103015.jpg",
    dimensions: "Variable",
    medium: "Interactive Installation"
  },
  {
    id: "05",
    title: "Ephemeral Horizon",
    category: "Digital Painting",
    year: "2024",
    description: "A meditative study on the colors of the horizon during twilight.",
    imageUrl: "https://help.hemorn.com/static/upload/2025December/67297ea2998d0f0da1d04c4dbe1b2781.jpg",
    dimensions: "200 x 100 cm",
    medium: "Digital Canvas"
  },
  {
    id: "06",
    title: "Digital Monolith",
    category: "Algorithmic Sculpture",
    year: "2024",
    description: "A study on the brutalist nature of digital structures in empty space.",
    imageUrl: "https://help.hemorn.com/static/upload/2025December/73992e799f8503e758add137f5a2d6b3.jpg",
    dimensions: "Digital Loop",
    medium: "C++ / OpenFrameworks"
  },
  {
    id: "07",
    title: "Synthetic Dreams",
    category: "AI Narrative",
    year: "2024",
    description: "Visualizing the latent space between human memory and machine learning.",
    imageUrl: "https://saas.chatbot.cn/download/minio/standard/2025-12-19/85e1230cd58b44c9a6843e53c54873f5.jpg",
    dimensions: "8K UHD",
    medium: "Neural Network Visualization"
  }
];
