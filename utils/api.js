import { AsyncStorage } from 'react-native';
import { STORAGE_KEY, testFunc } from './_helpers';

export function fetchDecksFromAsyncStorage() {
  //AsyncStorage.removeItem('UdaciFitness:calendar');
  //AsyncStorage.clear();

  return AsyncStorage.getItem(STORAGE_KEY)
  .then((results) => JSON.parse(results))
}
/*
export function formatCalendarResults (results) {
  return results === null
    ? setDummyData()
    : setMissingDates(JSON.parse(results))
}
*/


export function submitNewDeckToAsyncStorage({value, key}) {
  //try setItem instead of mergeItem
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key] : { title: value, questions: [] }
  }))
}

export function removeDeckFromAsyncStorage(key) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}


export function addCardToDeck({card, deck}) {

}
