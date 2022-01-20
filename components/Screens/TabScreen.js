import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute1 = () => <Text>Recents1</Text>;

const RecentsRoute2 = () => <Text>Recents2</Text>;

const RecentsRoute3 = () => <Text>Recents3</Text>;

const TabScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recent1', title: 'Profile1', icon: 'human' },
    { key: 'recent2', title: 'Profile2', icon: 'run' },
    { key: 'recent3', title: 'Profile3', icon: 'cat' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recent1: RecentsRoute1,
    recent2: RecentsRoute2,
    recent3: RecentsRoute3,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    labeled = 'false'
    barStyle={{ backgroundColor: 'grey' }}
    />
  );
};

export default TabScreen;