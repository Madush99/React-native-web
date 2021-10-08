/* eslint-disable prettier/prettier */

// import React from "react";
// 
// import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
// import Movies from "./movies";

// class HomePage extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//                   isAthunticated: false,
//                   resData: ''
//             };
//       }


//       componentDidMount() {

//             const payload = {
//                   email: "eve.holt@reqres.in",
//                   password: "cityslicka"
//             }




//             fetch('https://reqres.in/api/login', {
//                   method: 'POST',
//                   headers: {
//                         'Accept': "application/json",
//                         'Content-type': 'application/json'
//                   },
//                   body: JSON.stringify(payload)
//             })
//                   .then(res => res.json())
//                   .then((data) => {
//                         console.log(data)
//                         this.setState({
//                               resData: data.token,
//                               isAthunticated: true
//                         });

//                   },
//                         (error) => {
//                               console.log(error);
//                               this.setState({
//                                     isAthunticated: false,
//                                     resData: 'No Data'
//                               })
//                         }
//                   )
//       }

//       render() {
//             if (this.state.isAthunticated === true) {
//                   return (
//                         <View>

//                               <Movies />

//                         </View>
//                   )
//             } else {
//                   return (
//                         <Text>UnAuthorized</Text>
//                   )

//             }


//       }
// }

// export { HomePage }

