import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, useColorScheme, Pressable} from 'react-native';
import axios from 'axios';
import styles from './components/Mainstyle';
import Country from './components/Country';
const baseUrl = 'https://restcountries.com/v3.1/all';

const App = () => {
  const colorScheme = useColorScheme();

  const themeTextTitleStyle = colorScheme === 'light' ? styles.lightThemeTitleText : styles.darkThemeTitleText;
  const themeTextInputStyle = colorScheme === 'light' ? styles.lightThemeInputText : styles.darkThemeInputText;
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  const themeTextHugeStyle = colorScheme === 'light' ? styles.lightThemeHugeText : styles.darkThemeHugeText;
  const themeButtonStyle = colorScheme === 'light' ? styles.lightThemeButton : styles.darkThemeButton;

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('fi')

  const getCountries = async () => {
    try {
      axios.get(baseUrl).then(({ data }) => {
      setCountries(data)
    })
    } catch (error) {
      console.log(error);
    }
  };

  const CountriesList = ({ countries, showCountry }) => {

    if (countries.length > 10) {
      return (
        <View>
          <Text style={[styles.text, themeTextStyle]}>Too many matches, specify another filter</Text>
        </View>

      );
    }

    if (countries.length === 1) {
      return (
        <View>
          <Country country={countries[0]} />
        </View>
      );
    }

    if (countries.length > 0 && countries.length <= 10) {
      return countries.map((country) => {
        return (
          <View key={country.fifa}>
            <Text style={[styles.themeTextTitleStyle, themeTextTitleStyle]}>{country.name.common} <Pressable style={[styles.themeButtonStyle, themeButtonStyle ]} onPress={() => showCountry(country.name.common)}><Text>show</Text></Pressable></Text>
          </View>
        );
      });
    }
  };

  useEffect(() => {
    getCountries();
    
  }, [])

  const matchedContries = countries.filter(c => c.name.common.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.hugeText, themeTextHugeStyle]}>CountryApp</Text>
      <Text style={[styles.text, themeTextStyle]}>Find countries</Text>
      <TextInput style={[styles.textInput, themeTextInputStyle]}
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <CountriesList
      countries={matchedContries}
      showCountry={setSearch} />
      
    </View>
  );
};



export default App;