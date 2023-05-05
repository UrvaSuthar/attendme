import Geolocation from 'react-native-geolocation-service';
import GeoFencing from 'react-native-geo-fencing';
import { View, Text, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { addAttendanceToCSV } from '../helpers/attendanceHelper';

const Geofence = () => {
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);

  const polygon = [
    { lat: 23.595222, lng: 72.358285 },
    { lat: 23.595200, lng: 72.358435 },
    { lat: 23.595429, lng: 72.358473 },
    // last point has to be same as first point
    { lat: 23.595222, lng: 72.358285 },
  ];

  const checkAttendance = async (location) => {
    try {
      const isInsidePolygon = await GeoFencing.containsLocation(location, polygon);
      if (isInsidePolygon) {
        setIsAttendanceMarked(true);
        addAttendanceToCSV(location, new Date());
        Alert.alert('Attendance Marked', 'Your attendance has been marked.');
      } else {
        Alert.alert('Attendance Error', 'You are not inside the classroom.');
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Attendance Error', 'There was an error while marking your attendance.');
    }
  };

  const enableLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = { lat: latitude, lng: longitude };
        checkAttendance(location);
      },
      (error) => Alert.alert('Location Error', 'There was an error while getting your location.'),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  return (
    <View>
      {!isAttendanceMarked ? (
        <Button title="Enable Location" onPress={enableLocation} />
      ) : (
        <Text>Your attendance has already been marked.</Text>
      )}
    </View>
  );
};

export default Geofence;
