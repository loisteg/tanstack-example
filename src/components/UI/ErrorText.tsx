import { View, StyleSheet, Text} from 'react-native';

import { colors } from '@/src/constants';

import { textStyles } from '@/src/styles';

const ErrorText = ({ error }: {error: string}) => {
  if (!error) return <></>;

  return (
        <View style={styles.errorWrapper}>
            <Text style={[styles.errorText, textStyles.textUltraSmall]}>{error}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
  errorWrapper: {
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.DANGER,
  },
});

export default ErrorText;