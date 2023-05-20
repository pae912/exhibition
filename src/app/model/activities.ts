export interface Activities {
  UID: string;
  title: string;
  category: number;
  showInfo: [
    {
      time: string;
      location: string;
      locationName: string;
      onSales: boolean;
      price: string;
      latitude: string;
      longitude: string;
      endTime: string;
    }
  ];
  showUnit: string;
  discountInfo: string;
  descriptionFilterHtml: string;
  imageUrl: string;
  masterUnit: string;
  subUnit: string;
  supportUnit: string;
  otherUnit: string;
  webSales: string;
  sourceWebPromote: string;
  comment: string;
  editModifyDate: string;
  sourceWebName: string;
  startDate: string;
  endDate: string;
  hitRate: number;
}
