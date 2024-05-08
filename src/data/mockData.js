import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: "1",
    name: "Nelson",
    lastName: "Morales",
    age: 20,
    email: "Nmorales10@Diana.com",
    phone: "3014379624",
    country: "CO",
    role: "Admin",
  },
  {
    id: "2",
    name: "Sharith",
    lastName: "Blaco",
    age: 20,
    email: "Diana@Diana.com",
    phone: "3014379624",
    country: "CO",
    role: "Seller",
  },
];

export const mockDataContacts = [
  {
    id: "1",
    name: "Nelson",
    lastName: "Vidal",
    age: 20,
    email: "Nmorales@Diana.com",
    phone: "3014379624",
    country: "CO",
    adress: "0912 Won Street, Alabama, SY 10001",
    zip: "87281",
    city: "Esvazark",
  },
  {
    id: "2",
    name: "Diana",
    lastName: "Vidal",
    age: 20,
    email: "Dvidal@Nelson.com",
    phone: "3014379624",
    country: "CO",
    adress: "0912 Won Street, Alabama, SY 10001",
    zip: "87281",
    city: "New York",
  },
  {
    id: "3",
    name: "Sharith",
    lastName: "Blanco",
    age: 20,
    email: "Diana@Diana.com",
    phone: "3014379624",
    country: "CO",
    adress: "0912 Won Street, Alabama, SY 10001",
    zip: "87281",
    city: "New York",
  },
];

export const mockDataInvoices = [
  {
    id: "1",
    clientInfo: {
      id: "3",
      name: "Sharith",
      lastName: "Blanco",
      age: 22,
      email: "Sblanco@hotmail.com",
      phone: "3014379624",
      country: "COL",
    },
    productInfo: {
      id: "APPL456-A",
      name: "Programmable Coffee Maker",
      price: 79.99,
      description:
        "A coffee maker that allows you to program the time you want your coffee.",
    },
    quantity: 3,
    date: "05-02-2024",
    total: 239.97,
  },
  {
    id: "2",
    clientInfo: {
      id: "2",
      name: "Diana",
      lastName: "Vidal",
      age: 21,
      email: "Diana@Diana.com",
      phone: "3014379624",
      country: "COL",
    },
    productInfo: {
      id: "HOME123-A",
      name: "Kitchen Knife Set",
      price: 39.99,
      description: "A complete set of stainless steel kitchen knives.",
    },
    quantity: 1,
    date: "05-02-2024",
    total: 39.99,
  },
  // {
  //   id: 1,
  //   name: "Jon Snow",
  //   email: "jonsnow@gmail.com",
  //   cost: "21.24",
  //   phone: "(665)121-5454",
  //   date: "03/12/2022",
  // },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    burger: 96,
    kebab: 72,
    donut: 140,
  },
  {
    country: "AE",
    "hot dog": 55,
    burger: 28,
    kebab: 58,
    donut: 29,
  },
  {
    country: "AF",
    "hot dog": 109,
    burger: 23,
    kebab: 34,
    donut: 152,
  },
  {
    country: "AG",
    "hot dog": 133,
    burger: 52,
    kebab: 43,
    donut: 83,
  },
  {
    country: "AI",
    "hot dog": 81,
    burger: 80,
    kebab: 112,
    donut: 35,
  },
  {
    country: "AL",
    "hot dog": 66,
    burger: 111,
    kebab: 167,
    donut: 18,
  },
  {
    country: "AM",
    "hot dog": 80,
    burger: 47,
    kebab: 158,
    donut: 49,
  },
];

export const mockPieData = [
  {
    id: "social_media",
    category: "Social Media",
    value: 35,
  },
  {
    id: "search_engines",
    category: "Search Engines",
    value: 25,
  },
  {
    id: "referral",
    category: "Referral",
    value: 20,
  },
  {
    id: "direct_traffic",
    category: "Direct Traffic",
    value: 15,
  },
  {
    id: "email_marketing",
    category: "Email Marketing",
    value: 5,
  },
];

export const mockLineData = [
  {
    id: "electronics",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "January",
        y: 30000,
      },
      {
        x: "February",
        y: 25000,
      },
      {
        x: "March",
        y: 20000,
      },
      {
        x: "April",
        y: 15000,
      },
      {
        x: "May",
        y: 35000,
      },
      {
        x: "June",
        y: 10000,
      },
      {
        x: "July",
        y: 40000,
      },
      {
        x: "August",
        y: 8000,
      },
      {
        x: "September",
        y: 20000,
      },
      {
        x: "October",
        y: 35000,
      },
      {
        x: "November",
        y: 15000,
      },
      {
        x: "December",
        y: 25000,
      },
    ],
  },
  {
    id: "clothing",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "January",
        y: 5000,
      },
      {
        x: "February",
        y: 10000,
      },
      {
        x: "March",
        y: 8000,
      },
      {
        x: "April",
        y: 6000,
      },
      {
        x: "May",
        y: 12000,
      },
      {
        x: "June",
        y: 4000,
      },
      {
        x: "July",
        y: 15000,
      },
      {
        x: "August",
        y: 3000,
      },
      {
        x: "September",
        y: 7000,
      },
      {
        x: "October",
        y: 8000,
      },
      {
        x: "November",
        y: 4000,
      },
      {
        x: "December",
        y: 10000,
      },
    ],
  },
  {
    id: "home_appliances",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "January",
        y: 10000,
      },
      {
        x: "February",
        y: 12000,
      },
      {
        x: "March",
        y: 15000,
      },
      {
        x: "April",
        y: 8000,
      },
      {
        x: "May",
        y: 20000,
      },
      {
        x: "June",
        y: 5000,
      },
      {
        x: "July",
        y: 25000,
      },
      {
        x: "August",
        y: 5000,
      },
      {
        x: "September",
        y: 10000,
      },
      {
        x: "October",
        y: 18000,
      },
      {
        x: "November",
        y: 7000,
      },
      {
        x: "December",
        y: 12000,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "ARG",
    value: 50000,
  },
  {
    id: "BOL",
    value: 40000,
  },
  {
    id: "BRA",
    value: 60000,
  },
  {
    id: "CAN",
    value: 70000,
  },
  {
    id: "CHL",
    value: 45000,
  },
  {
    id: "COL",
    value: 55000,
  },
  {
    id: "CRI",
    value: 30000,
  },
  {
    id: "CUB",
    value: 35000,
  },
  {
    id: "DOM",
    value: 25000,
  },
  {
    id: "ECU",
    value: 28000,
  },
  {
    id: "SLV",
    value: 32000,
  },
  {
    id: "GTM",
    value: 28000,
  },
  {
    id: "HND",
    value: 30000,
  },
  {
    id: "MEX",
    value: 40000,
  },
  {
    id: "NIC",
    value: 20000,
  },
  {
    id: "PAN",
    value: 35000,
  },
  {
    id: "PRY",
    value: 30000,
  },
  {
    id: "PER",
    value: 20000,
  },
  {
    id: "PRI",
    value: 40000,
  },
  {
    id: "TTO",
    value: 45000,
  },
  {
    id: "USA",
    value: 50000,
  },
  {
    id: "URY",
    value: 40000,
  },
  {
    id: "VEN",
    value: 45000,
  },
  {
    id: "AUT",
    value: 25000,
  },
  {
    id: "BEL",
    value: 30000,
  },
  {
    id: "CHE",
    value: 20000,
  },
  {
    id: "DEU",
    value: 22000,
  },
  {
    id: "ESP",
    value: 1500,
  },
  {
    id: "FRA",
    value: 200,
  },
  {
    id: "GBR",
    value: 100,
  },
  {
    id: "ITA",
    value: 220,
  },
  {
    id: "NLD",
    value: 2700,
  },
  {
    id: "PRT",
    value: 250,
  },
];
