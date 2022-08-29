import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search Results for :
        <span style={{ color: "#F31503" }}> {searchTerm}</span>
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default SearchFeed;
