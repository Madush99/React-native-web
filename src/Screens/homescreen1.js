/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import Movies from './movies';

const Homescreen1 = () => {

      const [user, setUser] = useState({
            isAuthenticated: false,
            resData: ''
      })

      useEffect(() => {


            const payload = {
                  email: "eve.holt@reqres.in",
                  password: "cityslicka"
            }


            fetch('https://reqres.in/api/login', {
                  method: 'POST',
                  headers: {
                        'Accept': "application/json",
                        'Content-type': 'application/json'
                  },
                  body: JSON.stringify(payload)
            })
                  .then(res => res.json())
                  .then((data) => {
                        console.log(data)
                        setUser({
                              resData: data.token,
                              isAuthenticated: true
                        });

                  },
                        (error) => {
                              console.log(error);
                              setUser({
                                    isAuthenticated: false,
                                    resData: 'No Data'
                              })
                        }
                  )

      }, []);

      // if (user.isAuthenticated === true) {
      //       return (
      //             <View>

      //                   <Text>MAdush{user.token}</Text>

      //             </View>
      //       )
      // } else {
      //       return (
      //             <Text>UnAuthorized</Text>

      //       )
      // }

      return (
            <>
                  {user.isAuthenticated ? (

                        <View>
                              <Movies />
                        </View>


                  ) : (
                        <Text> UnAuthorized</Text>
                  )
                  }
            </>
      )


}

export default Homescreen1
