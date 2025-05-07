import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import css from '@components/css';

const PrimaryButton = ({ label, style, textStyle, onPress }) => (
  <TouchableOpacity
    style={style}
    activeOpacity={0.45}
    onPress={onPress}
  >
    <Text style={textStyle}>{label}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;