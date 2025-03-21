export interface Tool {
    id: number;
    title: string;
    description: string;
}
  

export interface ToolWithLink extends Tool {
  externalUrl: string;
}