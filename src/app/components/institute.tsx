import { Grid, Typography, Card, CardContent } from "@mui/material";
const universityNames = [
  "Cambridge University",
  "Harvard University",
  "Stanford University",
  "Massachusetts Institute of Technology (MIT)",
  "California Institute of Technology (Caltech)",
  "Princeton University",
  "Yale University",
  "University of Oxford",
  "University of Chicago",
  "Imperial College London",
];

const cardStyles = {
  height: "100%",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};
export default function Institue() {
  return (
    <main>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Meet Our
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            gutterBottom
            style={{
              paddingTop: "16px",
              paddingBottom: "16px",
              background:
                "linear-gradient(90.23deg, #234EB0 2.75%, #B656E2 104.73%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Awesome Team
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        paragraph
        style={{ marginBottom: "2rem" }}
      >
        Learn from world-renowned scientists and research scholars from top
        institutes around the globe.
      </Typography>
      <Grid container spacing={3}>
        {universityNames.map((name, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  {name}
                </Typography>
                {/* Add more information here */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
