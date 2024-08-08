/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */


CKEDITOR.plugins.addExternal('ckeditor_wiris', '../node_modules/@wiris/mathtype-ckeditor4/', 'plugin.js');

CKEDITOR.editorConfig = function (config) {
    // Add MathType and other plugins to extraPlugins
    config.extraPlugins = 'ckeditor_wiris,filebrowser';

    // Add the MathType toolbar buttons and other necessary toolbar items
    config.toolbar = [
        { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates'] },
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
        { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
        '/',
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
        { name: 'about', items: ['About'] },
        { name: 'wirisplugins', items: ['MathType', 'ChemType'] }
    ];

    // Add MathType Parameters
    config.mathTypeParameters = {
        serviceProviderProperties: {
            URI: 'http://localhost/aspx-services/generic_wiris/integration',
            server: 'aspx'
        }
    };

    // Allow MathML content
    config.allowedContent = true;
};


//CKEDITOR.editorConfig = function (config) {
//    // Define changes to default configuration here. For example:
//    // config.language = 'fr';
//    // config.uiColor = '#AADC6E';

//    // Add MathType and other plugins to extraPlugins
//    config.extraPlugins = 'ckeditor_wiris,filebrowser';

//    // Add the MathType toolbar buttons and other necessary toolbar items
//    config.toolbar = [
//        { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates'] },
//        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
//        { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
//        { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
//        '/',
//        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] },
//        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
//        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
//        { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
//        '/',
//        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
//        { name: 'colors', items: ['TextColor', 'BGColor'] },
//        { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
//        { name: 'about', items: ['About'] },
//        { name: 'wirisplugins', items: ['MathType', 'ChemType'] }
//    ];

//    // Add MathType Parameters
//    config.mathTypeParameters = {
//        serviceProviderProperties: {
//            URI: 'http://localhost/aspx-services/ckeditor_wiris/integration',
//            server: 'aspx'
//        }
//    };

//    // Allow MathML content
//    config.allowedContent = true;
//};

