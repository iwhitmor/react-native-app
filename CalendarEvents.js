import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

export default function CalendarEvents() {

  const [todaysEvents, setTodaysEvents] = useState([]);
  const [calendarError, setCalendarError] = useState(null);


  async function getEvents() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {

      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);

      const calendarIds = calendars.map(c => c.id);
      const startDate = new Date();
      const endDate = new Date(startDate.valueOf() + 1000 * 60 * 60 * 24);

      const todaysEvents = await Calendar.getEventsAsync(calendarIds, startDate, endDate);

      console.log(todaysEvents);

      setTodaysEvents(todaysEvents);
      //console.log('Here are all your calendars:');
      //console.log({ calendars });
    }
    else {
      setCalendarError("Could not load Calendar");
    }
  }

  return (
    <View style={styles.container}>
      <Button style={styles.button} title='Show todays events' onPress={getEvents} />
      {calendarError ?
        <Text style={{ fontWeight: 'bold' }}>{calendarError}</Text> :
        <>
          {todaysEvents.map(e => <Text key={e.id}>- {e.title} -</Text>)}
        </>
      }
    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

async function calendarEvents() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: '' }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
