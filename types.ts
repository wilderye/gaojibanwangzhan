
export interface Artwork {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  dimensions: string;
  medium: string;
}

export interface ExhibitionInfo {
  artistName: string;
  exhibitionTitle: string;
  curatorialStatement: string;
  duration: string;
}
