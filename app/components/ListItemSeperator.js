import React from 'react';
import {View} from 'react-native'
import colors from '../config/colors';

function ListItemSeperator() {
    return (
        <View
              style={{
                borderBottom: '1px solid red',
                width: '100%',
                height: 1,
                backgroundColor: colors.light,
                //margin: 5
              }}
              />
    );
}

export default ListItemSeperator;