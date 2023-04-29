export default async function handler(request, res) {
  const bars = [
    {
      title: "Rspack",
      duration: 10,
      start: 0,
      end: 10,
      decimals: 2,
      accessibilityLabel: "Bar Graphic that show how long to load a bar",
    },
    {
      title: "Illegal Downloads",
      duration: 20,
      start: 0,
      end: 20,
      decimals: 2,
      accessibilityLabel: "Bar Graphic that show how long to load a bar",
    },
    {
      title: "Shrek 5",
      duration: 10,
      start: 10,
      end: 20,
      decimals: 2,
      accessibilityLabel: "Bar Graphic that show how long to load a bar",
    },
  ];
  res.setHeader("Cache-Control", "max-age=0, s-maxage=1800");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  res.json(bars);
}
