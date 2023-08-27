"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material"; // Import Material-UI components
import styles from "./page.module.css"; // Import CSS module for styling

const MentorCard: React.FC<Mentor> = ({ name, uni, picUrl }) => {
  const cardStyle = {
    boxShadow: "none",
    borderRadius: "16px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const contentStyle = {
    padding: "16px",
  };

  return (
    <Card style={cardStyle}>
      <img
        src={picUrl}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "50%", // Crop the image in a circular shape
          objectFit: "cover", // Maintain aspect ratio and fill container
        }}
      />
      <CardContent style={contentStyle}>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {uni}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Mentors = () => {
  const mentors: Mentor[] = [
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg",
      name: "Piyush Verma",
      uni: "IISER Pune",
    },
    
    {
      picUrl: "http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg",
      name: "Sehasree Mohanta",
      uni: "IACS",
    },
    
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Aditya%20Nayak_Biology.jpeg",
      name: "Aditya Nayak",
      uni: "IISER Mohali",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg",
      name: "Shruti",
      uni: "CEBS,Mumbai",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/TIASHA_DAS_Biology.jpg",
      name: "Tiasha Das",
      uni: "IISER Berhampur",
    },
    {
      picUrl:
        "http://sciastra.com/new_admin//teams/files/Siddharth_Bhatt_physics.jpg",
      name: "Siddhart Bhatt",
      uni: "IISER Thiruvananthapuram",
    },
    {
      picUrl: "http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg",
      name: "Mandar Tornekar",
      uni: "GMC Dhule",
    },
    {
      picUrl: "http://sciastra.com/new_admin//teams/files/Parth_Singh.jpg",
      name: "Parth Kumar Singh",
      uni: "IIT,Jodhpur",
    },
   
 
  ];

  return (
    <Container>
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
        Meet Your Mentors
      </Typography>
      <br />
      <Grid container spacing={12}>
        {mentors.map((mentor, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <MentorCard {...mentor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Mentors;
