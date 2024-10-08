import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { colors } from '@/src/constants';
import { activeOpacities } from '@/src/styles';

import { cardTypes } from '@/src/types';

const Card: cardTypes.TCardProps = ({style, onPress, children}) => {
    if (!onPress) return (
        <View style={[styles.cardContainter, style]}>
            {children}
        </View>
    )

    return (
        <TouchableOpacity 
            style={[styles.cardContainter, style]}
            onPress={onPress}
            activeOpacity={activeOpacities.CARD}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainter: {
        width: '100%',
        marginBottom: 20,
        padding: 16,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.BOX_BG,
        borderRadius: 16,
    }
});

export default Card;