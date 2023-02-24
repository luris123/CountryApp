import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    lightContainer: {
      backgroundColor: '#d0d0c0',
    },
    darkContainer: {
      backgroundColor: '#242c40',
    },
    lightThemeText: {
      color: '#242c40',
    },
    darkThemeText: {
      color: '#d0d0c0',
      paddingBottom: 1
    },
    lightThemeTitleText: {
      color: '#242c40',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10,
    },
    darkThemeTitleText: {
      color: '#d0d0c0',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10,
      
    },
    lightThemeInputText: {
      color: '#242c40',
      backgroundColor: '#d0d0c0',
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
    },
    darkThemeInputText: {
      color: '#d0d0c0',
      backgroundColor: '#242c40',
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
    },
    lightThemeListText: {
      color: '#242c40',
      paddingLeft: 20,
    },
    darkThemeListText: {
      color: '#d0d0c0',
      paddingLeft: 20,
    },
    lightThemeHugeText: {
      color: '#242c40',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    darkThemeHugeText: {
      color: '#d0d0c0',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  
    lightThemeButton: {
      color: '#242c40',
      backgroundColor: '#d0d0c0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      paddingHorizontal: 4,
      borderRadius: 4,
      elevation: 3,
  
    },
    darkThemeButton: {
      color: '#d0d0c0',
      backgroundColor: '#d0d0c0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 4,
      elevation: 3,
    },
      
  });