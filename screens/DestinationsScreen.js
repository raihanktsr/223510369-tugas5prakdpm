import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const destinations = [
  { id: '1', name: 'Bali', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwz5_xDvpDpcMLnBKdICeBfXcYhhKu94YOA&s' },
  { id: '2', name: 'Yogyakarta', image: 'https://webasset.b-cdn.net/webprofile//default-joglosemar/berita/20240717152848_pict-1.jpg' },
];

export default function DestinationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => navigation.navigate('DestinationDetails', { destination: item })}>
            <Avatar source={{ uri: item.image }} rounded />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
