import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { SENDED } from '../../../../business/constants/offerStatus'

export default function SendOffer({ sendOffer, color }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [sending, setSending] = useState(false)

  const styles = functionStyles(color, error)

  const validPost = async () => {
    setSending(true)
    setError('')
    setSuccess('')

    const offerStatus = await sendOffer(value);

    if (offerStatus === SENDED) {
      setValue('');
      setSuccess(offerStatus)
    } else {
      setError(offerStatus)
    }

    setSending(false)
  }

  return <View style={styles.background}>
    {!!error && <Text style={styles.error}>{error}</Text>}
    {!!success && <Text style={styles.success}>{success}</Text>}
    <TextInput 
      value={value} 
      onChangeText={setValue}
      placeholder="R$"
      editable={!sending}
      style={styles.enter}
      keyboardType="decimal-pad"
    />
    <TouchableOpacity 
      accessibilityHint='Send offer'
      onPress={validPost}
      disabled={sending}
      style={styles.btn}>
      <FontAwesome5 name="check" size={24} color="#14181B" />
    </TouchableOpacity>
  </View>
}

const functionStyles = (color, error) => StyleSheet.create({
  background: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    padding: 8,
    flexWrap: 'wrap',
  },
  error: {
    width: '100%',
    marginHorizontal: 8,

    color: '#FF0000',

    fontSize: 14,
    marginBottom: 8,
  },
  success: {
    width: '100%',
    marginHorizontal: 8,

    color: '#2d6628',

    fontSize: 14,
    marginBottom: 8,
  },
  enter: {
    flex: 1,
    borderWidth: 1,
    borderColor: error ? '#FF0000' : '#4A4A4A',
    color: error ? '#FF0000' : '#4A4A4A',
    borderRadius: 16,
    height: 53,

    padding: 16,
    margin: 8,

    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    margin: 8,
    padding: 16,
    backgroundColor: color,
    borderRadius: 16,
  },
});