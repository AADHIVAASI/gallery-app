import React, {useState, useEffect} from 'react';
import {Heading} from './components/heading/Heading';
import {Loader} from './components/Loader';
import {Unsplash} from './components/Unsplash';
import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import Scroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Grid = styled.section`
  max-width: 100rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-auto-rows: 500px;
`;

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [noMoreItems, setNoMoreItems] = useState('');
  const apiBase = "https://api.unsplash.com/photos/random?client_id=";
  const client_id = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    fetchImages();
  }, [])
  const scrollSearch = () => {
    axios
    .get(`${apiBase}${client_id}&query=${search}&count=10`)
    .then(res => { 
      setImages([...images,...res.data])
    }, err => {
      setNoMoreItems('Yay! You have seen it all');
  })
  }

  const fetchImages = () => {
    axios
    .get(`${apiBase}${client_id}&count=10`)
    .then(res => {
      setImages([...images, ...res.data])
    }, err => {
      setNoMoreItems('Yay! You have seen it all');
    })
  }
  const searchImages = (e) => {
    setImages([])
    setSearch(e.target.value);
    axios
    .get(`${apiBase}${client_id}&query=${e.target.value}&count=10`)
    .then(res => {
      setImages([...res.data])
    }, err => {
      setNoMoreItems('Nothing here, try searching something else...');
    })
  }
  return (
    <div>
      <Heading searchImages={searchImages}/>
      <GlobalStyle/>
      <Scroll dataLength={images.length} 
              next={search.trim()===''?fetchImages:scrollSearch} 
              hasMore={true}
              loader={noMoreItems.trim()===''?<Loader/>:<p style={{ textAlign: "center" }}>
              <b>{noMoreItems}</b></p>}
              scrollThreshold="2px"
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }>
        <Grid>
          {images.map(image => (
            <Unsplash url={image.urls} key={image.id} blurHash={image.blur_hash}/>))}
        </Grid>
      </Scroll>
    </div>
  );
}

export default App;
