import React from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchContainer } from './restaurants.screen.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';


export const RestaurantsScreen = () => (
    <SafeArea>
      <SearchContainer>       
        <Searchbar />
      </SearchContainer>
      <FlatList 
        data={[
          {name: 1}, 
          {name: 2}, 
          {name: 3}, 
          {name: 4}, 
          {name: 5}, 
          {name: 6}, 
          {name: 7}, 
          {name: 8},
          {name: 9},
          {name:10},
        ]}
        renderItem={() =>
        <Spacer position='bottom' size='large'>
          <RestaurantInfoCard />
        </Spacer>
        }
        keyExtractor={(item) => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
);
