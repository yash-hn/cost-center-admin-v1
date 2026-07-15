export const CLIENTS = [
  "TCCC",
  "MARS",
  "Kellanova",
];

export interface Project {
  id: number;
  name: string;
  cost: number;
  totalTokens: number;
  inputTokens: number;
  outputTokens: number;
  workflows: number;
  activeUsers: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  cost: number;
  totalTokens: number;
  inputTokens: number;
  outputTokens: number;
  workflows: number;
  lastActivity: string;
}

export const PROJECTS: Record<string, Project[]> = {
  "TCCC": [
    { id: 1, name: "Sprite Summer Campaign", cost: 12847.32, totalTokens: 1284732000, inputTokens: 856488000, outputTokens: 428244000, workflows: 3241, activeUsers: 18 },
    { id: 2, name: "Diet Coke Awareness", cost: 9234.18, totalTokens: 923418000, inputTokens: 615612000, outputTokens: 307806000, workflows: 2187, activeUsers: 12 },
    { id: 3, name: "Vitamin Water Awareness", cost: 7651.44, totalTokens: 765144000, inputTokens: 510096000, outputTokens: 255048000, workflows: 1893, activeUsers: 9 },
    { id: 4, name: "Coke Zero BTS", cost: 5432.91, totalTokens: 543291000, inputTokens: 362194000, outputTokens: 181097000, workflows: 1432, activeUsers: 24 },
    { id: 5, name: "Dasani Analytics", cost: 3218.67, totalTokens: 321867000, inputTokens: 214578000, outputTokens: 107289000, workflows: 876, activeUsers: 7 },
    { id: 6, name: "Fanta Review", cost: 2891.23, totalTokens: 289123000, inputTokens: 192749000, outputTokens: 96374000, workflows: 654, activeUsers: 5 },
  ],
  "MARS": [
    { id: 7, name: "Pedigree Pro", cost: 18234.56, totalTokens: 1823456000, inputTokens: 1215637000, outputTokens: 607819000, workflows: 5234, activeUsers: 31 },
    { id: 8, name: "M&M Intelligence", cost: 11243.78, totalTokens: 1124378000, inputTokens: 749585000, outputTokens: 374793000, workflows: 2987, activeUsers: 15 },
    { id: 9, name: "Snickers NFL", cost: 8765.43, totalTokens: 876543000, inputTokens: 584362000, outputTokens: 292181000, workflows: 2134, activeUsers: 8 },
    { id: 10, name: "Tasty Bite New", cost: 4321.09, totalTokens: 432109000, inputTokens: 288073000, outputTokens: 144036000, workflows: 987, activeUsers: 11 },
  ],
  "Kellanova": [
    { id: 11, name: "Pringles AI", cost: 23456.78, totalTokens: 2345678000, inputTokens: 1563785000, outputTokens: 781893000, workflows: 6723, activeUsers: 28 },
    { id: 12, name: "Cheez It Reach", cost: 19876.54, totalTokens: 1987654000, inputTokens: 1325103000, outputTokens: 662551000, workflows: 5432, activeUsers: 19 },
    { id: 13, name: "Pop Tarts QR", cost: 15234.32, totalTokens: 1523432000, inputTokens: 1015621000, outputTokens: 507811000, workflows: 4123, activeUsers: 14 },
    { id: 14, name: "RXBAR Study", cost: 9876.54, totalTokens: 987654000, inputTokens: 658436000, outputTokens: 329218000, workflows: 2765, activeUsers: 22 },
    { id: 15, name: "Krispy Reach", cost: 7654.32, totalTokens: 765432000, inputTokens: 510288000, outputTokens: 255144000, workflows: 1987, activeUsers: 11 },
  ],
};

export const WORKSPACES: Record<number, Project[]> = {
  1: [
    { id: 101, name: "Email Campaigns WS", cost: 4234.56, totalTokens: 423456000, inputTokens: 282304000, outputTokens: 141152000, workflows: 1089, activeUsers: 7 },
    { id: 102, name: "Social Media WS", cost: 3821.43, totalTokens: 382143000, inputTokens: 254762000, outputTokens: 127381000, workflows: 987, activeUsers: 6 },
    { id: 103, name: "SEO Content WS", cost: 2891.23, totalTokens: 289123000, inputTokens: 192749000, outputTokens: 96374000, workflows: 765, activeUsers: 5 },
    { id: 104, name: "Analytics WS", cost: 1900.10, totalTokens: 190010000, inputTokens: 126673000, outputTokens: 63337000, workflows: 400, activeUsers: 3 },
  ],
  7: [
    { id: 201, name: "Frontend Dev WS", cost: 7234.56, totalTokens: 723456000, inputTokens: 482304000, outputTokens: 241152000, workflows: 2089, activeUsers: 12 },
    { id: 202, name: "Backend Dev WS", cost: 6543.21, totalTokens: 654321000, inputTokens: 436214000, outputTokens: 218107000, workflows: 1876, activeUsers: 11 },
    { id: 203, name: "ML Engineering WS", cost: 4456.79, totalTokens: 445679000, inputTokens: 297119000, outputTokens: 148560000, workflows: 1269, activeUsers: 8 },
  ],
  11: [
    { id: 301, name: "Market Risk WS", cost: 9234.12, totalTokens: 923412000, inputTokens: 615608000, outputTokens: 307804000, workflows: 2654, activeUsers: 11 },
    { id: 302, name: "Credit Risk WS", cost: 8123.45, totalTokens: 812345000, inputTokens: 541563000, outputTokens: 270782000, workflows: 2187, activeUsers: 9 },
    { id: 303, name: "Ops Risk WS", cost: 6099.21, totalTokens: 609921000, inputTokens: 406614000, outputTokens: 203307000, workflows: 1882, activeUsers: 8 },
  ],
};

export const USERS: Record<string, User[]> = {
  "TCCC ": [
    { id: 1001, name: "Sarah Chen", email: "s.chen@aps.com", cost: 4234.56, totalTokens: 423456000, inputTokens: 282304000, outputTokens: 141152000, workflows: 1089, lastActivity: "2026-07-14" },
    { id: 1002, name: "Marcus Williams", email: "m.williams@ps.com", cost: 3821.43, totalTokens: 382143000, inputTokens: 254762000, outputTokens: 127381000, workflows: 987, lastActivity: "2026-07-14" },
    { id: 1003, name: "Priya Patel", email: "p.patel@ps.com", cost: 3456.78, totalTokens: 345678000, inputTokens: 230452000, outputTokens: 115226000, workflows: 876, lastActivity: "2026-07-13" },
    { id: 1004, name: "James O'Brien", email: "j.obrien@ps.com", cost: 2891.23, totalTokens: 289123000, inputTokens: 192749000, outputTokens: 96374000, workflows: 743, lastActivity: "2026-07-13" },
    { id: 1005, name: "Aisha Johnson", email: "a.johnson@ps.com", cost: 2134.56, totalTokens: 213456000, inputTokens: 142304000, outputTokens: 71152000, workflows: 543, lastActivity: "2026-07-12" },
    { id: 1006, name: "David Kim", email: "d.kim@ps.com", cost: 1876.43, totalTokens: 187643000, inputTokens: 125095000, outputTokens: 62548000, workflows: 432, lastActivity: "2026-07-11" },
    { id: 1007, name: "Elena Rodriguez", email: "e.rodriguez@ps.com", cost: 1543.21, totalTokens: 154321000, inputTokens: 102881000, outputTokens: 51440000, workflows: 367, lastActivity: "2026-07-10" },
    { id: 1008, name: "Tom Blackwood", email: "t.blackwood@ps.com", cost: 1234.56, totalTokens: 123456000, inputTokens: 82304000, outputTokens: 41152000, workflows: 289, lastActivity: "2026-07-08" },
  ],
  "MARS": [
    { id: 2001, name: "Alex Zhang", email: "a.zhang@ps.io", cost: 7234.56, totalTokens: 723456000, inputTokens: 482304000, outputTokens: 241152000, workflows: 1987, lastActivity: "2026-07-14" },
    { id: 2002, name: "Nina Kowalski", email: "n.kowalski@ps.com", cost: 5821.43, totalTokens: 582143000, inputTokens: 388095000, outputTokens: 194048000, workflows: 1543, lastActivity: "2026-07-14" },
    { id: 2003, name: "Rafael Santos", email: "r.santos@ps.com", cost: 4567.89, totalTokens: 456789000, inputTokens: 304526000, outputTokens: 152263000, workflows: 1234, lastActivity: "2026-07-13" },
    { id: 2004, name: "Yuki Tanaka", email: "y.tanaka@ps.com", cost: 3234.12, totalTokens: 323412000, inputTokens: 215608000, outputTokens: 107804000, workflows: 876, lastActivity: "2026-07-12" },
    { id: 2005, name: "Lena Hoffmann", email: "l.hoffmann@ps.com", cost: 1706.56, totalTokens: 170656000, inputTokens: 113771000, outputTokens: 56885000, workflows: 394, lastActivity: "2026-07-10" },
  ],
  "Kellanova": [
    { id: 3001, name: "Victoria Larsson", email: "v.larsson@ps.com", cost: 9234.56, totalTokens: 923456000, inputTokens: 615637000, outputTokens: 307819000, workflows: 2654, lastActivity: "2026-07-14" },
    { id: 3002, name: "Kevin Okafor", email: "k.okafor@ps.com", cost: 7821.43, totalTokens: 782143000, inputTokens: 521428000, outputTokens: 260715000, workflows: 2187, lastActivity: "2026-07-14" },
    { id: 3003, name: "Mei Lin", email: "m.lin@ps.com", cost: 6543.21, totalTokens: 654321000, inputTokens: 436214000, outputTokens: 218107000, workflows: 1876, lastActivity: "2026-07-13" },
    { id: 3004, name: "Robert Fischer", email: "r.fischer@ps.com", cost: 5234.56, totalTokens: 523456000, inputTokens: 348971000, outputTokens: 174485000, workflows: 1543, lastActivity: "2026-07-12" },
    { id: 3005, name: "Amara Diallo", email: "a.diallo@ps.com", cost: 4123.45, totalTokens: 412345000, inputTokens: 274897000, outputTokens: 137448000, workflows: 1234, lastActivity: "2026-07-11" },
    { id: 3006, name: "Chen Wei", email: "c.wei@ps.com", cost: 3261.09, totalTokens: 326109000, inputTokens: 217406000, outputTokens: 108703000, workflows: 942, lastActivity: "2026-07-10" },
  ],
};
