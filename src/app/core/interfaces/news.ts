
export interface News {
  id: number;
  arTitle: string;
  enTitle: string | null;
  interfaceImagePath: string;
  arDescription: string;
  enDescription: string | null;
  date: string;
}