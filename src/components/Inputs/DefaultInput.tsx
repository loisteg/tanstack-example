import { TextInput, View, StyleSheet } from 'react-native';
import { ErrorText } from '../UI';

import { colors, fonts } from '@/src/constants';

import { inputsTypes } from '@/src/types';

const DefaultInput = (props: inputsTypes.DefaultInputProps) => {
    const {
        input,
        returnKeyType,
        placeholder,
        meta,
        extraContainerStyle,
        errorMessage,
        clearError,
        autoCapitalize,
        autoCorrect = true,
        onTextChangeCustom,
        keyboardType,
        disabled,
        ignoreTouchStatus,
        transformValueToNumber,
        ...inputProps
    } = props;

    const onTextChange = (textValue: string | undefined) => {
        clearError && clearError();
        onTextChangeCustom && onTextChangeCustom(textValue);
        input &&  input.onChange(textValue);
    };

    const handleFocus = () => {
        input && input.onFocus();
    };

    const handleBlur = () => {
        input && input.onBlur();
    };

    return (
        <View style={[styles.inputContainer, extraContainerStyle]}>
            <TextInput
                style={[
                    styles.input,
                    meta?.active && styles.activeInput,
                    meta?.dirty && styles.dirtyInput,
                    disabled && styles.disabledInput,
                ]}
                {...inputProps}
                onChangeText={onTextChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={input && String(input.value)}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
                // placeholderTextColor={}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                editable={!disabled}
            />

            {
                (meta?.touched || ignoreTouchStatus) &&
                <ErrorText error={errorMessage || meta?.error} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        width: '100%',
        paddingTop: 23,
        paddingBottom: 9,
        paddingHorizontal: 16,
        backgroundColor: 'SOME COLOR',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'SOME COLOR',
        fontFamily: fonts.medium,
        fontSize: 15,
        color: 'SOME COLOR',
    },
    activeInput: {},
    dirtyInput: {},
    disabledInput: {}
});

export default DefaultInput;
