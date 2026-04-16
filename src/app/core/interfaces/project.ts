

export interface Project {
  id: number;
  arTitle: string;
  arDescription: string;
  enTitle: string;
  enDescription: string;
  clientName: string;
  value: string;
  fromDate: string;
  toDate: string;
  interfaceImagePath: string | null;
  projectImages: string[];
  arProjectCategory: string;
  enProjectCategory: string;
  serviceIds:number[],
   services?: any[]; 
}