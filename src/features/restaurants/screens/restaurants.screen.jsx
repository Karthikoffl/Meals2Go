import React, { useContext } from 'react';
import { MD2Colors } from 'react-native-paper';
import { LoadingContainer, Loading } from './restaurants.screen.styles';
import { FlatList } from 'react-native';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';


export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue600} />
        </LoadingContainer>
      )}
      <Search />
      <FlatList 
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.name} position='bottom' size='large'>
              <RestaurantInfoCard restaurant={item}/>
            </Spacer>
        );
      }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
