/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
const imgrc = 'https://static01.nyt.com/images/2021/09/16/arts/16balanchine1/16balanchine1-mediumThreeByTwo440.jpg';

const Movies = () => {

      const [movies, setMovies] = useState([]);

      useEffect(() => {
            const fetchMovies = async () => {
                  const res = await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY');
                  setMovies(res.data.results);
                  console.log(res.data.results);

            };

            fetchMovies();
      }, []);

      return (

            <View>
                  {movies.map((movie) => {
                        const { display_title, mpaa_rating, critics_pick, byline, multimedia, link } = movie;

                        return (
                              <>

                                    <Text key={critics_pick}></Text>
                                    <Text>{multimedia.src}</Text>

                                    <View>
                                          <Image source={{ uri: multimedia.src }}
                                                style={{ width: 400, height: 400 }} />
                                    </View>



                              </>
                        );
                  })}

            </View>

      );
};

export default Movies;
