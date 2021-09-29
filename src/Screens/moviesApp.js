/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MoviesApp extends React.Component {

      constructor() {
            super();
            this.state = {
                  movies: [],
            };


      }

      componentDidMount() {
            fetch('https://reqres.in/api/users?page=2')
                  .then(res => res.json())
                  .then(moviesdata => this.setState({ movies: moviesdata.data.movies }));
            console.log(this.state.movies);
      }


      render() {

            return (
                  <View>
                        <Text>Madush</Text>

                  </View>
            );
      }
}
