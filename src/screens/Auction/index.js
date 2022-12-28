import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import useAuction from '../../hooks/useAuction'

import { FlatList, View, StyleSheet } from 'react-native'
import Header from './components/Header'
import Offer from './components/Offer'
import SendOffer from './components/SendOffer'

export default function Auction() {
  const route = useRoute()
  const [loading, setLoading] = useState(false)

  const id = route.params.id;
  const [ auction, updateAuction, sendOffer ] = useAuction(id)
  
  const newOffer = async (value) => {
    const offerStatus = await sendOffer(value)
    if (offerStatus.valid)
      await updateAuction()

    return offerStatus;
  }

  const changeAuction = async () => {
    setLoading(true)
    await updateAuction()
    setLoading(false)
  };

  if (!auction.name) {
    return <View />
  }

  return <>
    <FlatList
      data={auction.offers}
      keyExtractor={(offer) => offer.id}
      renderItem={({ item }) => <Offer {...item} cor={auction.color} />}
      ListHeaderComponent={() => <Header {...auction} />}
      onRefresh={changeAuction}
      refreshing={loading}
      contentContainerStyle={sytles.list}
    />
    <SendOffer color={auction.color} sendOffer={newOffer} />
  </>
}

const sytles = StyleSheet.create({
  list: {
    /* Padding para evitar que o último item da lista
    fique por baixo do formulário de envio de lance */
    paddingBottom: 110,
  },
})
