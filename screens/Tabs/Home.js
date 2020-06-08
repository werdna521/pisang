import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import { addHomeSensor } from '../../redux/actions/home.action';
import { connect } from 'react-redux';
import ActionBar from '../../components/Bars/ActionBar';
import HelloMessage from '../../components/Home/HelloMessage';
import { getScreenHeight } from '../../utils/dimensions';
import HomeEnvironment from '../../components/Home/HomeEnvironment';
import SensorReading from '../../components/Home/SensorReading';
import RepoFactory, { SENSOR } from '../../repositories/repository.factory';

const Home = ({ addSensor, sensors }) => {
  useEffect(() => {
    const fetchAsync = async () => {
      const data = await RepoFactory.with(SENSOR).getTemperatureAndHumidity();
      addSensor(data, 0);
    };
    fetchAsync().then();
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HelloMessage />
          <SensorReading
            style={styles.marginOnTop}
            sensors={[...sensors[0]]}
          />
          <HomeEnvironment style={styles.marginWideOnTop} />
        </View>
      </ScrollView>
      <ActionBar onAdd={() => alert('ok')} add pic />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d36,
    minHeight: getScreenHeight() + 72,
  },
  marginOnTop: {
    marginTop: dimens.d8,
  },
  marginWideOnTop: {
    marginTop: dimens.d28,
  },
});

const mapStateToProps = (state) => {
  return {
    sensors: state.home.map(({ sensors }) => sensors.map((s) => s)),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSensor: (sensorData, i) => dispatch(addHomeSensor(sensorData, i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
