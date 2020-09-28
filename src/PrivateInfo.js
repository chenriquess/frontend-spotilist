import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './PrivateInfo.css';
import PlaylistsCover from "./components/PlaylistsCover";
import Search from "./components/Search";

const PrivateInfo = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let res = await axios.get('http://localhost:5000/spotify/playlists');
      console.log('res.data', res.data)
      setPlaylists(res.data || []);
      // ...
    }

    fetchData();

  }, [])

  return (
    <>
      <PlaylistsCover playlists={playlists} />
      <Search />
    </>
  );
};

export default PrivateInfo;