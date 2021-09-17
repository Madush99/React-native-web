/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
const imgrc = 'https://static01.nyt.com/images/2021/09/16/arts/16balanchine1/16balanchine1-mediumThreeByTwo440.jpg';

const Books = () => {

      const [books, setBooks] = useState([]);

      useEffect(() => {
            const fetchBooks = async () => {
                  const res = await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY');
                  setBooks(res.data.results);
                  console.log(res.data.results);

            };

            fetchBooks();
      }, []);

      return (

            <View>
                  {books.map((book) => {
                        const { display_title, mpaa_rating, critics_pick, byline, multimedia, link } = book;

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

export default Books;
