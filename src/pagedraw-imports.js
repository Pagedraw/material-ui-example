import React from 'react';
import _ from 'lodash';
import {pagedrawSpecs} from 'pagedraw-imports';
import parsePropTypes from 'parse-prop-types'
import {
    Button,
    IconButton,
    Switch,
    Dialog,
    TextField,
    Card,
    Checkbox,
    CircularProgress,
    Input,
    LinearProgress,
    Select,
    Radio,
    AppBar
} from '@material-ui/core';


import bscss from './bootstrap-css'
import {
    Alert,
    Badge,
    Button as BsButton,
    Image,
    ProgressBar,
    Tooltip,
    Glyphicon,
    Jumbotron,
    Label,
    Well,
    DropdownButton
} from 'react-bootstrap';

const Enum = (options) => ({__ty: 'Enum', options});

// Material ui types
const colorTy = Enum(['default', 'primary', 'secondary']);
const variantTy = Enum(['raised', 'flat', 'outlined', 'fab']);
const sizeTy = Enum(['small', 'medium', 'large']);

// React bootstrap types
const bsStyleTy = Enum(['success', 'warning', 'danger', 'info']);
const bsSizeTy = Enum(["lg", "large", "sm", "small", "xs", "xsmall"])


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
            },
            {
                name: 'Checkbox',
                tag: Checkbox,
                propTypes: {color: colorTy, checked: 'Boolean', disabled: 'Boolean'},
                resizable: [],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'CircularProgress',
                tag: CircularProgress,
                propTypes: {color: colorTy, thickness: 'Number', size: 'Number', value: "Number", variant: Enum(['determinate', 'indeterminate', 'static'])},
                resizable: [],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'Input',
                tag: Input,
                propTypes: {defaultValue: 'Text', disabled: "Boolean", disableUnderline: "Boolean", error: 'Boolean', multiline: 'Boolean'},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'LinearProgress',
                tag: LinearProgress,
                propTypes: {value: 'Number', valueBuffer: 'Number', color: Enum(['primary', 'secondary']), variant: Enum(['determinate', 'indeterminate', 'buffer', 'query'])},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'Select',
                tag: Select,
                propTypes: {value: 'Text', open: 'Boolean', displayEmpty: 'Boolean', children: 'Text'},
                resizable: ['width'],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'Radio',
                tag: Radio,
                propTypes: {color: colorTy, disabled: 'Boolean', disableRipple: 'Boolean', checked: 'Boolean'},
                resizable: [],
                importPath: '@material-ui/core',
                isDefaultExport: false
            },
            {
                name: 'AppBar',
                tag: AppBar,
                propTypes: {color: colorTy, disabled: 'Boolean', disableRipple: 'Boolean', checked: 'Boolean'},
                resizable: [],
                importPath: '@material-ui/core',
                isDefaultExport: false
            }
        ], 'name')
    },
    {
        name: 'React Bootstrap',
        children: _.sortBy([
            {
                name: 'Alert',
                tag: Alert,
                propTypes: {bsStyle: bsStyleTy, children: "Text"},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Button',
                tag: BsButton,
                propTypes: {bsStyle: bsStyleTy, bsSize: bsSizeTy, type: Enum(['button', 'reset', 'submit']), active: 'Boolean', disabled: 'Boolean', block: 'Boolean', children: "Text"},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'ProgressBar',
                tag: ProgressBar,
                propTypes: {bsStyle: bsStyleTy, min: "Number", now: 'Number', max: "Number", active: "Boolean", striped: 'Boolean'},
                resizable: ['width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Tooltip',
                tag: Tooltip,
                propTypes: {id: 'Text', placement: Enum(['top', 'right', 'bottom', 'left']), onOpen: 'Function', onClose: 'Function', children: 'Text'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Badge',
                tag: Badge,
                propTypes: {pullRight: 'Boolean'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Glyphicon',
                tag: Glyphicon,
                propTypes: {glyph: 'Text'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Image',
                tag: Image,
                propTypes: {thumbnail: 'Boolean', responsive: 'Boolean', rounded: 'Boolean', circle: 'Boolean'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Jumbotron',
                tag: Jumbotron,
                propTypes: {children: 'Text'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Label',
                tag: Label,
                propTypes: {bsStyle: bsStyleTy, children: 'Text'},
                resizable: [],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'Well',
                tag: Well,
                propTypes: {bsSize: bsSizeTy, children: 'Text'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            },
            {
                name: 'DropdownButton',
                tag: DropdownButton,
                propTypes: {bsStyle: bsStyleTy, bsSize: bsSizeTy, title: 'Text', noCaret: 'Boolean', children: 'Text'},
                resizable: ['height', 'width'],
                importPath: 'react-bootstrap',
                isDefaultExport: false
            }
        ], 'name').map((spec) => _.extend({}, spec, {includeCSS: [['bscss', bscss]]}))
    }
]);

export default expt;
