import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {IVideo} from '../../interfaces/Videos';

interface Props {
  video: IVideo;
}

const VideoListItem = ({video}: Props) => {
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = Math.floor(video.views / 1000000) + 'M';
  } else if (video.views > 1000) {
    viewsString = Math.floor(video.views / 1000) + 'K';
  }

  return (
    <>
      <View style={styles.videoCard}>
        <Image
          style={styles.tumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes} : {seconds < 10 ? '0' : ''}
            {seconds}
          </Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} {video.createdAt}
          </Text>
        </View>
        <Icon
          style={styles.icon}
          name="ellipsis-vertical"
          size={16}
          color="white"
        />
      </View>
    </>
  );
};

export default VideoListItem;
