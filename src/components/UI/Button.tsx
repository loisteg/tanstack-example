/**
 * Styled for 3 types:  outline | primary | cancel
 */
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import IconBox from './IconBox';

import { colors } from '@/src/constants';
import { textStyles, activeOpacities } from '@/src/styles';

import { DimensionValue } from 'react-native';
import { buttonTypes } from '@/src/types';

const Button: buttonTypes.TButtonProps = (props) => {
    const {
        title, 
        type,
        iconPosition,
        onPress,
        disabled = false, 
        style,
    } = props,
        buttonTitle = title.toUpperCase();

    let buttonBackgroundColor = colors.MAIN,
        buttonWidth: DimensionValue = '100%', 
        textStyle = {color: colors.WHITE, ...textStyles.textBtnLarge};

    switch (type) {
        case 'no-border':
            buttonBackgroundColor = 'transparent';
            break;
        case 'primary-small':
            buttonBackgroundColor = colors.ADDITIONAL;
            buttonWidth = 'auto';
            textStyle = {color: colors.MAIN, ...textStyles.textBtnSmall}
            break;
    case 'primary':
            break;
        default :
            break;
    }

    const ButtonText = () => {
        if (!iconPosition) return <Text style={textStyle}>{buttonTitle}</Text>;

        if (iconPosition === 'right') {
            return (
                <View style={styles.buttonWithIconsWrapper}>
                    <Text style={textStyle}>{buttonTitle}</Text>
                    <IconBox 
                        name={'ArrowRight'} 
                        fill={textStyle.color}
                        style={{marginLeft: 10}}
                    />
                </View>
            )
        }

        // In this case iconPosition === 'left'
        return (
            <View style={styles.buttonWithIconsWrapper}>
                <IconBox 
                    name={'ArrowLeft'} 
                    fill={textStyle.color}
                    style={{marginRight: 10}}
                />
                <Text style={textStyle}>{buttonTitle}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity
            style={[
               {backgroundColor: buttonBackgroundColor, width: buttonWidth},
                styles.basicButton,
                style,
            ]}
            disabled={disabled}
            onPress={onPress}
            activeOpacity={activeOpacities.BUTTON}>
                {ButtonText()}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    basicButton: {
        marginTop: 24,
        borderRadius: 44,
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonWithIconsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Button;