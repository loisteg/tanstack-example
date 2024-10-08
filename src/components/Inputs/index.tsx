import { View } from 'react-native';
import InputLabel from './InputLabel';
import DefaultInput from "./DefaultInput";
import PasswordInput from "./PasswordInput";

import { inputsTypes } from '@/src/types';

const Input = (props: inputsTypes.FieldProps) => {
    const { label, inputType } = props;

    let content;

    switch(inputType) {
        case 'default':
            content = <DefaultInput {...props as inputsTypes.DefaultInputProps} />;
            break;
        case 'password':
            content = <PasswordInput {...props as inputsTypes.PasswordInputProps} />;
            break;
        default:
            content = <DefaultInput {...props as inputsTypes.DefaultInputProps} />;
            break;
    };

    return (
        <View>
            <InputLabel label={label}/>
            {content}
        </View>
    )
};

export default Input;