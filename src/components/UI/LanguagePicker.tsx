import { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useCurrentLanguage } from '../../hooks';

import { colors, fonts } from '../../constants';
import { activeOpacities } from '../../styles';

import { languagePickerTypes } from '../../types';

const LanguagePicker: languagePickerTypes.TLanguagePicker = ({languages = ['de', 'de', 'eu'], style}) => {
    const {currentLanguage, changeLanguage} = useCurrentLanguage();
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const languagesList = useMemo(() => {
        return languages.filter(lg => lg !== currentLanguage)
    }, [languages, currentLanguage]);

    const dynamicMainButtonStyle = isPickerOpen ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    } : {
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14
    }

    const togglePicker = () => {
        if (languagesList.length === 0) return;
        setIsPickerOpen(previousState => !previousState);
    };

    const onButtonPress = (lg: string) => {
        changeLanguage(lg);
        togglePicker()
    }

  return (
    <View style={style} >
        <TouchableOpacity
            onPress={togglePicker}
            style={[styles.languagePickerMainButton, dynamicMainButtonStyle]}
            activeOpacity={activeOpacities.BUTTON}
        >
            <Text style={styles.languagePickerText}>{currentLanguage}</Text>
        </TouchableOpacity>
        {isPickerOpen && (
            <View style={styles.languagePickerContentWrapper}>
                {languagesList.map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => onButtonPress(item)}
                        style={[
                            styles.languagePickerMainButton,
                            styles.languagePickerButton,
                            i === languagesList.length - 1 ? styles.languagePickerLastButton : {}
                        ]}
                        activeOpacity={activeOpacities.BUTTON}
                    >
                     <Text style={styles.languagePickerText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    languagePickerMainButton: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.TRANSPARENT_WHITE,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    },
    languagePickerContentWrapper: {
        position: 'absolute',
        width: '100%',
        top: 45
    },
    languagePickerLastButton: {
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14
    },
    languagePickerButton: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    languagePickerText: {
        color: colors.BOX_BG,
        fontFamily: fonts.bold,
        fontSize: 16,
        textTransform: 'uppercase'
    }
});

export default LanguagePicker;