/**
 * Usage
 * <IconButton name='ChevronDown' style={{backgroundColor:'red'}} fill="#000" onPress={() => {}}/>
 */
import {TouchableOpacity, StyleSheet} from "react-native";

import ICONS from '../../icons';

import { iconsTypes } from '../../types';

function IconButton(props: iconsTypes.IIconButtonProps) {
    const {name, fill, onPress, disabled} = props;
    const TagName = ICONS[name];

    return (
        <TouchableOpacity
            style={[styles.iconBox, props.style]}
            onPress={onPress}
            disabled={disabled}
        >
            <TagName fill={fill} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        width: 24,
        height: 24,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }
});

export default IconButton;

