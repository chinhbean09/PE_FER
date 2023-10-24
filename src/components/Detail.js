import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default function Detail() {
  const staff = useParams();
  const [APIData, setAPIData] = useState([]);
  const getStaffsUrl = `https://65375b6abb226bb85dd31a56.mockapi.io/api/v1/staffManagement/${staff.id}`;

  useEffect(() => {
    fetch(getStaffsUrl, { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAPIData(data);
      })
      .catch(error => console.log(error.message));
  }, [getStaffsUrl]);

  return (
    <div>
      <h1>Detail</h1>
      <h1>Detail</h1>
      <Grid container>
        <Grid className="parent" item xs={12}>
          <Card className="child" sx={{ maxWidth: 600 }}>
            <CardMedia sx={{ height: 440 }} image={APIData.avatar} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name: <a href={`detail/${APIData.id}`}>{APIData.name}</a>
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Address: {APIData.address}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Age: {APIData.age}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                CreatedAt: {APIData.createdAt}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
