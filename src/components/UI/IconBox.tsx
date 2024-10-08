/**
 * Usage
 * <IconButton name='ChevronDown' style={{backgroundColor:'red'}} fill="#000" onPress={() => {}}/>
 */
import {View, StyleSheet} from "react-native";

import ICONS from '../../icons';

import { iconsTypes } from '../../types';

function IconBox(props: iconsTypes.IIconBoxProps) {
    let {name, fill} = props;
    const TagName = ICONS[name];

    return (
        <View style={[styles.iconBox, props.style]}>
            <TagName fill={fill} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent:'center',
    }
});

export default IconBox;

