export interface Music {
  UID: string;
  title: string;
  category: string;
  showInfo: [
    {
      time: string;
      location: string;
      locationName: string;
      onSales: boolean;
      price: string;
      latitude: null;
      longitude: null;
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
