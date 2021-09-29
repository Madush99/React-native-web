/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';


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

                  <View >
                        <Text style={{ fontFamily: 'Cochin', fontWeight: 'bold', fontSize: '50px', paddingBottom: '20px', paddingTop: '20px', alignSelf: 'center' }}>New York Times Movies Reviews</Text>
                        <Image source={{ uri: 'https://wallpapercave.com/wp/wp3285541.jpg' }} style={{ width: 1550, height: 500, paddingBottom: '40px' }} />
                        <Text style={{ paddingTop: '20px', color: '#000000', fontWeight: 'bold', fontSize: '20px', fontFamily: 'Cochin', paddingLeft: '60px' }}>Movies</Text>
                        <Text style={{ paddingTop: '20px', color: '#000000', fontWeight: 'bold', fontSize: '40px', fontFamily: 'Cochin', paddingLeft: '60px' }}>Movie Reviews</Text>
                        <Text style={{ paddingTop: '5px', color: '#3C3C3C', fontSize: '15px', fontFamily: 'Cochin', paddingLeft: '60px' }}>Our film critics on blockbusters, independents and everything in between.</Text>
                        <Text style={{
                              height: 1,
                              backgroundColor: 'rgb(200, 199, 204)',
                              marginLeft: 60
                        }}></Text>
                        <br />
                        <br />
                        {movies.map((movie) => {
                              const {
                                    display_title,
                                    headline,
                                    mpaa_rating,
                                    critics_pick,
                                    byline,
                                    multimedia,
                                    link,
                                    summary_short,
                                    opening_date,
                                    date_updated,
                                    publication_date,
                              } = movie;

                              return (
                                    <>

                                          <Card style={[styles.container]}>
                                                <Card.Title title={display_title} subtitle={headline} style={{ marginLeft: '40px' }} />
                                                <Text style={{ marginLeft: '60px', paddingBottom: '20px' }}>Publication Date: {publication_date}</Text>
                                                <Card.Content style={[styles.content]}>

                                                      <Card.Cover source={{ uri: multimedia.src }} style={{ width: 500, height: 250, alignSelf: 'center' }} />

                                                      <Title>{critics_pick}| {mpaa_rating}</Title>
                                                      <Paragraph>{summary_short}</Paragraph>
                                                      <Paragraph style={{ color: '#c0c0c0', paddingBottom: '10px' }}>By: {byline}</Paragraph>
                                                      <a href={link.url} style={{ paddingBottom: '15px', width: 600, alignSelf: 'center' }}>
                                                            <Button onPress={link.url} title={link.suggested_link_text} color='#161314'></Button>
                                                      </a>
                                                </Card.Content >

                                          </Card>

                                          <View style={{ paddingBottom: '30px', paddingTop: '20px' }}>

                                          </View>

                                          {/* <View style={[styles.row, styles.container]}>
                                                <Text>{display_title} </Text>
                                                <Text>MAdish</Text>
                                                <Image source={{ uri: 'https://wallpapercave.com/wp/wp3285541.jpg' }} style={{ width: 100, height: 100, }} />

                                          </View> */}

                                    </>
                              );
                        })}

                  </View >

            </ScrollView >
      );
};

const styles = StyleSheet.create({
      container: {
            backgroundColor: 'rgb(239, 239, 244)',
            flex: 1,
            width: 900,
            alignSelf: 'center',

      },
      row: {
            flexDirection: 'row',
            paddingLeft: 60,
      },
      content: {
            marginLeft: '40px',
            marginRight: '40px'
      },


})



export default Movies;
