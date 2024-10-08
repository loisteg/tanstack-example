import {FC} from 'react';
import {PropsWithChildren} from 'react';
import {functionsTypes} from '..';

export type TModalProps = FC<
  PropsWithChildren<{
    onClose: functionsTypes.TFunctionType;
  }>
>;
