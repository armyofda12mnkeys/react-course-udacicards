import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY, NOTIFICATIONS_STORAGE_KEY } from './_helpers';
import { Notifications, Permission } from 'expo';


export function fetchDecksFromAsyncStorage() {
  //AsyncStorage.removeItem('UdaciFitness:calendar');
  //AsyncStorage.clear();

  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
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
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key] : { title: value, questions: [] }
  }))
}

export function removeDeckFromAsyncStorage(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}


export function submitNewCardToDeck({card, db_key}) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[db_key].questions.push( card );      
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}






export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync);
}
export function createLocalNotificationJSONOject() {
  return {
    title: 'Take your Quiz today!',
    body: '👋 Please remember to take your Quiz today!',
    ios: {
      sound: true,
    }, 
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}
export function setLocalNotification() {
  console.log('setLocalNotification');
  AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
  .then(JSON.parse)
  .then((data) => {
    if(data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) => {
        if(status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync();
          let tomorrow = new Date();
          tomorrow.setDate( tomorrow.getDate() + 1 );
          tomorrow.setHours(20);
          tomorrow.setMinutes(0);
          
          Notifications.scheduleLocalNotificationAsync(
            createLocalNotificationJSONOject(),
            {
              time: tomorrow,
              repeat: 'day'
            }
          );
          
          AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(true))
          
        }
      })
    }
  });
}