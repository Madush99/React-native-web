/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


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
            <ScrollView>

                  <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Cochin', fontWeight: 'bold', fontSize: '50px', paddingBottom: '40px', paddingTop: '20px' }}>New York Times Movies Reviews</Text>
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
                                          <Card style={{ width: 800, height: 800 }}>
                                                <Card.Title title={headline} subtitle={display_title} />
                                                {/* <Card.Cover source={{ uri: multimedia.src }} style={{ width: 800, height: 600 }} /> */}
                                                <Card.Content>
                                                      <Card.Cover source={{ uri: multimedia.src }} style={{ width: 800, height: 600 }} />
                                                      <Title>{display_title}</Title>
                                                      <Paragraph>{summary_short}</Paragraph>
                                                </Card.Content>
                                          </Card>

                                    </>
                              );
                        })}

                  </View >

            </ScrollView>
      );
};

export default Movies;
