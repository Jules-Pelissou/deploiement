import { Text, View, Button } from 'react-native';
import {articles} from '../data';


const Articles = ({route}, {navigation}) => {
  
 const {id} = route.params

  return(
 <View>
  {articles[id].map((article) => {
        return <Text> {article.content} </Text>;
      })}
  <Button title="Retour" onPress={() => navigation.navigate('MonComposant')} />
  </View>
  );
}

export default Articles;