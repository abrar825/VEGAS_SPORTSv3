// Player data store
export const players = {
  '1': {
    id: 1,
    name: "Arnan Chowdhury",
    title: "League MVP",
    image: "/default.png",
    schoolLogo: "/ChattLogoGold.png",
    colors: {
      main: "#FDDA0D",
      glow: "#FDDA0D"
    },
    stats: {
      touchdowns: 24,
      yards: 2187,
      record: "13-4"
    },
    weeklyStats: [
      {
        week: "GM 1",
        fantasy: { fpts: 23.2, gp: 1, qbGp: 0 },
        receiving: { tar: 7, rec: 5, yd: 52, yac: 27, td: 1, pt1: 0, pt2: 0, fum: 0 },
        passing: { att: 0, cmp: 0, cmpPerc: 0.0, yd: 0, td: 0, pt1: 0, pt2: 0, int: 0, pick6: 0 },
        defense: { tkl: 5, pbu: 0, sack: 0, ff: 0, fr: 0, int: 0, td: 0, pt1: 0, pt2: 0 }
      }
    ]
  },
  '2': {
    id: 2,
    name: "Abrar Chowdhury",
    title: "Offensive Player of the Year",
    image: "/default.png",
    schoolLogo: "/bulldawg.png",
    colors: {
      main: "#EF4444",
      glow: "#EF4444"
    },
    stats: {
      touchdowns: 21,
      yards: 1987,
      record: "12-5"
    },
    weeklyStats: [
      {
        week: "GM 1",
        fantasy: { fpts: 21.8, gp: 1, qbGp: 0 },
        receiving: { tar: 8, rec: 6, yd: 78, yac: 35, td: 1, pt1: 0, pt2: 0, fum: 0 },
        passing: { att: 0, cmp: 0, cmpPerc: 0.0, yd: 0, td: 0, pt1: 0, pt2: 0, int: 0, pick6: 0 },
        defense: { tkl: 3, pbu: 1, sack: 0, ff: 0, fr: 0, int: 0, td: 0, pt1: 0, pt2: 0 }
      }
    ]
  },
  '3': {
    id: 3,
    name: "Arib Ahmed",
    title: "Defensive Player of the Year",
    image: "/default.png",
    schoolLogo: "/ggclogo.png",
    colors: {
      main: "#DE52FD",
      glow: "#DE52FD"
    },
    stats: {
      touchdowns: 18,
      yards: 1756,
      record: "11-6"
    },
    weeklyStats: [
      {
        week: "GM 1",
        fantasy: { fpts: 19.5, gp: 1, qbGp: 0 },
        receiving: { tar: 6, rec: 4, yd: 45, yac: 22, td: 1, pt1: 0, pt2: 0, fum: 0 },
        passing: { att: 0, cmp: 0, cmpPerc: 0.0, yd: 0, td: 0, pt1: 0, pt2: 0, int: 0, pick6: 0 },
        defense: { tkl: 7, pbu: 2, sack: 1, ff: 1, fr: 0, int: 0, td: 0, pt1: 0, pt2: 0 }
      }
    ]
  }
};