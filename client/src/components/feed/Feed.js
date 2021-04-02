import React from "react";
import Appbar from "./appbar/Appbar";
import TopArtists from "./TopArtists/TopArtists";

function Feed() {
  return (
    <div style={{ padding: "1px" }}>
      <Appbar />
      <TopArtists />
    </div>
  );
}

export default Feed;
