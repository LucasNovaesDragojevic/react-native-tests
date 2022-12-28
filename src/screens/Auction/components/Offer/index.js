import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../../../../components/Card'

import { decimalToReal } from '../../../../business/formatters/money'

export default function Offer({ id, value, color }) {
  return <Card style={styles.card}>
    <View style={styles.init}>
      <FontAwesome5 name="hand-paper" size={24} color={color} />
      <Text style={styles.identifier}>#{id}</Text>
    </View>
    <Text style={styles.offer}>{decimalToReal(value)}</Text>
  </Card>

}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 16,

    marginHorizontal: 16,
    marginVertical: 8,
  },
  init: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  identifier: {
    fontSize: 14,
    marginLeft: 8,
    color: '#4A4A4A',
  },
  offer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  }
});
