// ------ import react and its elements
import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

// main component
const SearchBar = ({
  // params
  handleChange,
  placeholder
}) => {
  // render view
  return (
    <TextInput
      style={styles.container}
      placeholder={!placeholder ? 'Search' : placeholder}
      onChangeText={(e) => handleChange(e)}
    />
  )
}

export default SearchBar
// style
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#7fb5eb',
    height: 40,
    width: '100%',
  }
})