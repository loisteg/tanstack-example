import { Modal, View, StyleSheet } from 'react-native';
import Loader from './Loader';

import { colors } from '@/src/constants';

const ModalLoader = ({isVisible}: {isVisible: boolean}) => {
    return(
        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}
        >
            <View style={styles.container}>
                <Loader />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: colors.POPUP_BG,
       justifyContent: 'center',
       alignItems: 'center',
   }
});

export default ModalLoader;
