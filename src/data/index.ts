export interface Meal {
  name: string;
  description: string;
  price: number;
  count: number;
}

export const data: Meal[] = [
  {
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    count: 20,
  },
  {
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    count: 15,
  },
  {
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    count: 30,
  },
  {
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    count: 10,
  },
  {
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    count: 25,
  },
  {
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    count: 20,
  },
  {
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    count: 18,
  },
  {
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    count: 20,
  },
];
