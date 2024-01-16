import { Text, View, Button } from 'react-native';
import {categories} from '../data';

const Categories = ({navigation}) => {

  return(
  <View>
  {categories.map((categorie) => {
        return( 
        <Button title={categorie.name} onPress={() => navigation.navigate('Articles', {id : categorie.id})} />
      );
      })}
  </View>
  );
}

export default Categories;