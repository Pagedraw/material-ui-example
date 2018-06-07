import React from 'react';
import _ from 'lodash';
import {pagedrawSpecs} from 'pagedraw-imports';
import parsePropTypes from 'parse-prop-types'
import {
    Button,
    IconButton,
    Switch,
    Dialog,
    TextField
} from '@material-ui/core';


const Enum = (options) => ({__ty: 'Enum', options});
const colorTy = Enum(['default', 'primary', 'secondary']);
const variantTy = Enum(['raised', 'flat', 'outlined', 'fab']);
const sizeTy = Enum(['small', 'medium', 'large']);

const expt = pagedrawSpecs([
    {
        name: 'Material UI',
        children: _.sortBy([ {
                name: 'Button',
                tag: Button,
                propTypes: {'variant': variantTy, size: sizeTy, 'color': colorTy, 'children': 'Text', disabled: 'Boolean', fullWidth: 'Boolean'},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'IconButton',
                tag: IconButton,
                propTypes: {color: colorTy, 'children': 'Text', disabled: 'Boolean'},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'Switch',
                tag: Switch,
                propTypes: {color: colorTy, checked: 'Boolean', disabled: 'Boolean'},
                resizable: [],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'TextField',
                tag: TextField,
                propTypes: {defaultValue: 'Text', helperText: 'Text', label: 'Text', disabled: 'Boolean', error: 'Boolean', fullWidth: 'Boolean'},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            }
        ], 'name')
    }
]);

export default expt;
