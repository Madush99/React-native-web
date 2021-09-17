/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


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

            <View style={{ alignItems: 'center' }}>

                  {movies.map((movie) => {
                        const {
                              display_title,
                              headline,
                              mpaa_rating,
                              critics_pick,
                              byline,
                              multimedia,
                              link,
                              summary_short
                        } = movie;

                        return (
                              <>
                                    {/* 
                                          <Text key={critics_pick}></Text>
                                          <Text></Text>
                                          <Text>{headline}</Text>
                                          <Text>{mpaa_rating}</Text>
                                          <Text>{byline}</Text>
                                          {/* <Text>{link}</Text> */}
                                    {/* <Text></Text>
                                          <View>
                                                <Image source={{ uri: multimedia.src }}
                                                      style={{ width: 400, height: 400 }} />
                                          </View> */}
                                    <Card style={{ width: 800, height: 800 }}>
                                          <Card.Title title={headline} subtitle={display_title} />
                                          {/* <Card.Cover source={{ uri: multimedia.src }} style={{ width: 800, height: 600 }} /> */}
                                          <Card.Content>
                                                <Card.Cover source={{ uri: multimedia.src }} style={{ width: 800, height: 600 }} />
                                                <Title>{display_title}</Title>
                                                <Paragraph>{summary_short}</Paragraph>
                                          </Card.Content>

                                          <br></br>
                                    </Card>

                              </>
                        );
                  })}

            </View >


      );
};

export default Movies;
