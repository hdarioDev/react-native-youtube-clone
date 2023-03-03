import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoCard: {},
  tumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },

  timeContainer: {
    backgroundColor: '#00000099',
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  //  Row title
  titleRow: {
    flexDirection: 'row',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  midleContainer: {
    marginHorizontal: 12,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginBottom: 5,
  },
  subtitle: {
    color: 'grey',
  },
  icon: {
    marginTop: 8,
  },
});
