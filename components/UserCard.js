import React from 'react';
import {Text, Card, Button, Icon} from '@rneui/themed';
const UserCard = ({user}) => {
  return (
    <Card>
      <Card.Title>{user?.name ? user.name : 'Test User'}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{width: 300, height: 400, padding: 100}}
        source={{
          uri: user?.avatar
            ? user?.avatar
            : 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        }}
      />
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Button
        icon={
          <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default UserCard;
