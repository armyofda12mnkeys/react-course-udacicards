import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY, testFunc } from './_helpers';

export function fetchDecksFromAsyncStorage() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
  .then((results) => JSON.parse(results))
}

export function submitEntryToAsyncStorage({entry, key}) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key] : entry
  }))
}

export function removeEntryFromAsyncStorage(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}