
import {StyleSheet} from 'react-native';
import IconButton from './IconButton';

import { colors } from '@/src/constants';

import { buttonTypes } from '@/src/types';

const BackButton: buttonTypes.TBackButtonProps= ({onPress, style}) => {
    return <IconButton name={'ArrowLeft'} onPress={onPress} style={[styles.backButtonContainer, style]}/>
}

const styles = StyleSheet.create({
    backButtonContainer: {
        width: 32,
        height: 32,
        padding: 4,
        backgroundColor: colors.BOX_BG,
        borderRadius: 4,
    }
});

export default BackButton