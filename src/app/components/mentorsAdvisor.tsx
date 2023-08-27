"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  Button,
} from "@mui/material";

const MentorAdvisorCard: React.FC<MentorAdvisor> = ({
  name,
  uni,
  post,
  picUrl,
}) => {
  return (
    
    <Card
      style={{
        boxShadow: "none",
        borderRadius: "16px",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={picUrl}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "50%", // Crop the image in a circular shape
          objectFit: "cover", // Maintain aspect ratio and fill container
        }}
      />
      <CardContent
        style={{
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#6B7280", // Text color for post
            marginBottom: "8px",
          }}
        >
          {post}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#6B7280", // Text color for university
          }}
        >
          {uni}
        </Typography>
        <Button
          variant="outlined"
          style={{
            marginTop: "16px",
            borderColor: "#B656E2", // Purple border color
            color: "#B656E2", // Purple text color
            transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
          }}
        >
          Message him now
        </Button>
      </CardContent>
    </Card>
  );
};

const MentorAdvisor = () => {
  const mentors: MentorAdvisor[] = [
   
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg",
      name: "Abhay Gupta",
      uni: "IIT Bombay",
      post: "Principal Project Scientist",
    },
   
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Veena_Sri_mathematics.jpg",
      name: "Veena Sri",
      uni: "IISER TVM",
      post: "Principal Project Scientist",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Adityarup_Laha_mathematics.jpg",
      name: "Adityarup Laha",
      uni: "ISI, Kolkata",
      post: "Principal Project Scientist",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Md_Akhtar_mathematics.jpg",
      name: "MD JAVED AKHTAR",
      uni: "IISER,KOLKATA",
      post: "Principal Project Scientist",
    },
    {
      picUrl: "http://sciastra.com/new_admin//teams/files/Parth_Singh.jpg",
      name: "Parth Kumar Singh",
      uni: "IIT,Jodhpur",
      post: "Principal Project Scientist",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Mandar_Tornekar_chemistry.jpg",
      name: "Mandar Tornekar",
      uni: "GMC Dhule",
      post: "Principal Project Scientist",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg",
      name: "Shruti",
      uni: "CEBS,Mumbai",
      post: "Principal Project Scientist",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Sagar_Rathore_physics.jpg",
      name: "Sagar Rathore",
      uni: "IISER Berhampur",
      post: "Principal Project Scientist",
    },
    
  ];

  return (
    <Container >
      <Typography variant="h3" align="center" gutterBottom></Typography>
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
        Mentor & Advisor
      </Typography>
      <br />
      <Grid container spacing={12}>
        {mentors.map((mentor, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <MentorAdvisorCard {...mentor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MentorAdvisor;
