import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material"; // Import Material-UI components
import styles from "./page.module.css"; // Import CSS module for styling
import Institue from "./components/institute";
import Mentor from "./components/mentors";
import MentorAndAdvisor from "./components/mentorsAdvisor";

const pageStyles = {
  background: "white", // Set the background color to white
  minHeight: "100vh",
  padding: "2rem",
};

export default function Home() {
  return (
    <main className={styles.main} style={pageStyles}>
      <Institue />
      <br />
      <br />
      <Mentor />
      <MentorAndAdvisor />
    </main>
  );
}
