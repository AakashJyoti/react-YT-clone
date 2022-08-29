import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="91vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,11,106,1) 35%, rgba(8,126,150,1) 100%)",
            zIndex: "10",
            height: "15rem",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-8rem" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" }, marginLeft: { xs: "1rem" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
