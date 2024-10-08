import { useState, useMemo } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { IconButton, ErrorText } from '../UI';

import { colors, fonts } from '../../constants';

import { inputsTypes } from '@/src/types';

const PasswordInput = (props: inputsTypes.PasswordInputProps) => {
    const {
        input: {onBlur, onChange, onFocus, value},
        returnKeyType,
        placeholder,
        meta: {touched, error, active, dirty},
        extraContainerStyle,
        errorMessage,
        autoCapitalize,
        autoCorrect = true,
        onTextChangeCustom,
        keyboardType,
        secureTextEntry,
        disabled,
        ignoreTouchStatus,
        ...inputProps
    } = props;

    const [isSecure, setIsSecure] = useState(secureTextEntry ? !!secureTextEntry : true);

    const onTextChange = (textValue: string | undefined) => {
        onTextChangeCustom && onTextChangeCustom();
        onChange(textValue);
    }

    const iconName: 'Eye' | 'EyeClosed'  = useMemo(() => {
        return isSecure ? 'Eye' : 'EyeClosed';
    }, [isSecure]);

    const handleFocus = () => {
        onFocus()
    };
      
    const handleBlur = () => {
        onBlur()
    };

    return (
        <View style={[styles.inputContainer, extraContainerStyle]}>
            <View>
                <TextInput
                    style={[
                        styles.input,
                        active && styles.activeInput,
                        dirty && styles.dirtyInput,
                        disabled && styles.disabledInput,
                    ]}
                    {...inputProps}
                    onChangeText={onTextChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={value}
                    returnKeyType={returnKeyType}
                    placeholder={placeholder}
                    placeholderTextColor={''}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={isSecure}
                    keyboardType={keyboardType}
                    editable={!disabled}
                />
                <IconButton 
                    name={iconName} 
                    onPress={() => setIsSecure(previousState => !previousState)}
                    fill={''}
                    style={styles.secureButton}
                />
            </View>

            {
                (touched || ignoreTouchStatus) &&
                <ErrorText error={errorMessage || error} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        width: '100%',
        paddingVertical: 18,
        paddingLeft: 16,
        paddingRight: 56,
        borderWidth: 1,
        borderRadius: 4,
        // borderColor: COLORS.DARK,
        // fontFamily: FONTS.regular,
        fontSize: 16,
        lineHeight: 24,
        // color: COLORS.BLACK,
    },
    activeInput: {},
    dirtyInput: {},
    disabledInput: {},
    secureButton: {
        position: 'absolute',
        right: 16,
        height: '100%',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
});

export default PasswordInput;