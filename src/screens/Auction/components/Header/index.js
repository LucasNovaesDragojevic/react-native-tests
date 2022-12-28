import React from 'react'

import { Text, View, StyleSheet } from 'react-native'
import Icone from '../../../../components/Icon'

import { decimalToReal } from '../../../../business/formatters/money'
import { formataMaiorLanceDoLeilao } from '../../../../business/formatters/offer'

export default function Header({ nome, descricao, lances, valorInicial, cor, icone }) {
  const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);

  return <>
    <Icone cor={cor} nome={icone} style={styles.header} />
    <View style={styles.info}>
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.description}>{descricao}</Text>
      <View style={styles.summary}>
        <View style={styles.melhorLance}>
          <Text style={styles.OfferLegend}>Highest Offer</Text>
          <Text style={styles.offerValue}>{decimalToReal(maiorLance)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.offerInitial}>
          <Text style={styles.OfferLegend}>Initial Value</Text>
          <Text style={styles.offerValue}>{decimalToReal(valorInicial)}</Text>
        </View>
      </View>
    </View>
  </>    
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingBottom: 48 + 24,
  },
  info: {
    flex: 1,
    marginTop: -24,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,

    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: '#4A4A4A',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',

    borderRadius: 8,
    
    backgroundColor: '#F3F2F2',

    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  OfferLegend: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  offerValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  offerInitial: {
    alignItems: 'flex-end',
  },
  divider: {
    width: 1,
    backgroundColor: '#e6e6e6',
  },
});