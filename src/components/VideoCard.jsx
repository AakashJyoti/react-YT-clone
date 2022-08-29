import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet, "id =", videoId);

  return (
    <Card
      sx={{
        width: { xs: "90vw", md: "25rem" },
        boxShadow: "none",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
          sx={{ width: { xs: "90vw", sm: "26rem" }, height: "180px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1d1d20", height: "60px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography varient="subtitle" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 62) || demoVideoTitle.slice(0, 60)}...
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography varient="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
