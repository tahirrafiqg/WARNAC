import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

type IconType =
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Feather'
    | 'AntDesign'
    | 'Entypo'
    | 'Ionicons'
    | 'EvilIcons'
    | 'Octicons'
    | 'Fontisto';

const iconTypes: Record<IconType, React.ComponentType<any>> = {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
    Feather,
    AntDesign,
    Entypo,
    Ionicons,
    EvilIcons,
    Octicons,
    Fontisto,
};

interface IconProps {
    type?: IconType;
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
}

const VectorIcon: React.FC<IconProps> = ({ type = 'Ionicons', name, size, color, onPress }) => {
    const IconComponent = iconTypes[type];
    return (
        <IconComponent
            name={name}
            size={size}
            color={color}
            onPress={onPress}
        />
    );
};

export default VectorIcon;
