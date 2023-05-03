import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar, MD2Colors } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchContainer, LoadingContainer, Loading } from './restaurants.screen.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';



export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue600} />
        </LoadingContainer>
      )}
      <SearchContainer>       
        <Searchbar />
      </SearchContainer>
      <FlatList 
        data={restaurants}
        renderItem={({ item }) => {
          return (
        <Spacer position='bottom' size='large'>
          <RestaurantInfoCard restaurant={item}/>
        </Spacer>
        );}}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
)};
