interface PredictionItem {
  id: number;
  militaryType: string;
  specialty: string;
  probability: number;
  date: string;
}

export const dummyData: PredictionItem[] = [
  {
    id: 1,
    militaryType: '육군',
    specialty: 'S/W개발병',
    probability: 32,
    date: '2024-10-10 19:54',
  },
  {
    id: 2,
    militaryType: '육군',
    specialty: '임기제부사관',
    probability: 100,
    date: '2024-10-10 20:54',
  },
];
