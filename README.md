This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).


## How to install and run

get this repo then run 'yarn install' and 'yarn start' to run the app.

Note: I tested this mostly on the Android platform so please use that.

Note: I used Reactotron to follow up AsyncStorage and Redux updates. 
if would like to do the same, please run for Android Genymotion VM: 
adb reverse tcp:9090 tcp:9090
so Reactotron can listen (note: if you do not see any data being updated, then may need to turn off the the app's JS Debugging as it conflicts with Reactotron ports).