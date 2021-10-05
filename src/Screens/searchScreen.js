/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { StyleSheet, Button } from 'react-native';



const SearchScreen = ({ searchText }) => {

      const [text, setText] = useState('');

      const handlesubmit = (e) => {
            searchText()
      };

      return (
            <>






            </>
      )
}

const styles = StyleSheet.create({
      container: {
            alignSelf: 'stretch',
            padding: '1rem'
      },
      textinput: {
            height: 26,
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
            padding: 4,
            marginVertical: '1rem'
      },
      multiline: {
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
            padding: 4,
            marginVertical: '1rem'
      }
});

export default SearchScreen
