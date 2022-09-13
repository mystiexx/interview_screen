export const roles = [
  {
    id: 1,
    title: "Adminstrator",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 3,
  },
  {
    id: 2,
    title: "Loan Officer",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 14,
  },
  {
    id: 3,
    title: "Collection Officer",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 12,
  },
  {
    id: 4,
    title: "Auditor",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 3,
  },
  {
    id: 5,
    title: "Master Admin",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 14,
  },
  {
    id: 6,
    title: "Credit Admin",
    permissions: [
      "View and edit Users",
      "View and edit Collections",
      "View and edit Remita",
      "View and edit Email Campaign",
      "View Loan Officer",
      "View Approve Initiate Application",
      "View Applications",
    ],
    users: 12,
  },
];

export const users = [
  {
    id: "G140",
    user: "Olabisi Gbolahan",
    created_at: "October 24, 2018",
  },
  {
    id: "G141",
    user: "Ekaete Clement",
    created_at: "August 7, 2017",
  },
  {
    id: "DH5-0010",
    user: "Ikenna Paul",
    created_at: "November 16, 2014",
  },
  {
    id: "RO1004",
    user: "Habibah Aliyu",
    created_at: "October 30, 2017",
  },
];

export const permissions = [
  {
    id: 1,
    name: "Users",
    value: {
      write: "write",
      create: "create",
    },
  },
  {
    id: 2,
    name: "Collections",
    value: {
      write: "write",
      create: "create",
    },
  },
];
