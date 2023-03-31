import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import Swiper from 'react-native-deck-swiper';
import UserCard from '../components/UserCard';
const users = [
  {
    name: 'brynna',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'talhaconcepts',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'andy vitale',
    avatar:
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];

const HomeScreen = () => {
 
  return (
    <>
      <Swiper
        cards={users}
        renderCard={user => {
          return (
            <>
              <UserCard user={user} />
            </>
          );
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
          handleRefresh();
        }}
        cardIndex={0}
        backgroundColor={'black'}
        stackSize={3}>
        <Button
          onPress={() => {
            console.log('oulala');
          }}
          title="Press me">
          Demo for swiper
        </Button>
      </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  fonts: {
    marginBottom: 8,
  },
  card: {height: 10},
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
export default HomeScreen;
