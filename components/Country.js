import React from 'react';
import { Text, View, Image, useColorScheme } from 'react-native';
import styles from './Mainstyle';

const Country = ({ country }) => {
    const colorScheme = useColorScheme();
  
    const themeTextTitleStyle = colorScheme === 'light' ? styles.lightThemeTitleText : styles.darkThemeTitleText;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextListStyle = colorScheme === 'light' ? styles.lightThemeListText : styles.darkThemeListText;
  
    const languages = Object.values(country.languages)
    const flagUrl = country.flags.png
    const capital = country.capital[0]
    const currencies = Object.values(country.currencies)
  
    return (
      <View>
        <Text style={[styles.themeTextTitleStyle, themeTextTitleStyle]}>{country.name.common}</Text>
        <Text style={[styles.text, themeTextStyle]}>Capital: {capital}</Text>
        <Text style={[styles.text, themeTextStyle]}>Population: {country.population}</Text>
        <Text style={[styles.text, themeTextStyle]}>Currencies:</Text>
        <Text style={[styles.themeTextListStyle, themeTextListStyle]}>{currencies.map(c => `\u2022 ${c.name}`).join('\n')}</Text>
        <Text style={[styles.text, themeTextStyle]}>Languages:</Text>
        <Text style={[styles.themeTextListStyle, themeTextListStyle]}>{languages.map(l => `\u2022 ${l}`).join('\n')}</Text>
  
        <Image
          style={{width: 200, height: 100, resizeMode: 'contain', overflow: 'hidden', marginTop: 10, marginBottom: 10}}
          source={{uri: flagUrl}}
        />
      </View>
    )
  }

export default Country;