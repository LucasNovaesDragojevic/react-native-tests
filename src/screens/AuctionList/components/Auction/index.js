import { useNavigation } from '@react-navigation/native'

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from '../../../../components/Icon'
import Card from '../../../../components/Card'

import { decimalToReal } from '../../../../business/formatters/money'

export default function Auction({ id, name, initalValue, icon, color }) {
  const navigation = useNavigation()

  return (
    <Card 
      onPress={() => navigation.navigate('Auction', { id })}
      style={styles.card}
      Component={TouchableOpacity}>
      <Icon cor={color} name={icon} style={styles.header} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.value}>
          <Text style={styles.offerCaption}>Initial Value</Text>
          <Text style={styles.offerValue}>{decimalToReal(initalValue)}</Text>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  header: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    color: '#4A4A4A',
  },
  value: {
    alignItems: 'flex-end',
  },
  offerCaption: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  offerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  }
})