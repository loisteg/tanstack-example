import { StyleSheet, Modal as ModalView, TouchableWithoutFeedback, View } from 'react-native';
import Card from './Card';

import { colors } from '@/src/constants';

import { modalTypes } from '@/src/types';

const Modal: modalTypes.TModalProps = ({children, onClose}) => (
    <ModalView
        transparent
        onRequestClose={onClose}
        animationType={'fade'}
    >
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.modalContainer}>
                <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                    <Card style={styles.modalWindowContent}>
                        {children}
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </ModalView>
);

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.POPUP_BG,
    },
    modalWindowContent: {
        maxHeight: '90%',
        padding: 24,
        borderWidth: 2,
        borderColor: colors.FIELD_STROKE
    },
});

export default Modal;

