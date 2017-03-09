//@charset UTF-8
Ext.define( 'Ext.overrides.form.field.Base', {
    override: 'Ext.form.field.Base',

    msgTarget: 'qtip',
    labelAlign: 'top',
    labelSeparator: '',

    doSpecialKey: true,
    useLabelBold: false,
    setTextAlign: false,
    useUpperCase: false,
    useLocalMask: false,

    returnWithMask: false,

    maskRel: {
        m: '99',
        d: '99',
        n: '99',
        j: '99',
        s: '99',
        i: '99',
        H: '99',
        Y: '9999'
    },

    initComponent: function () {
        var me = this;

        me.callParent();

        me.setLabelBold(me.useLabelBold);

        if (me.getXType() == 'displayfield') {
            return false;
        }

        me.onAfter( 'specialkey', me.fnSpecialKey, me);
        me.onAfter( 'afterrender', me.fnAfterRender, me);

        me.date = me.getXType() == 'datefield';
        me.time = me.getXType() == 'timefield';

        if(me.useLocalMask == true || me.date == true || me.time == true) {
            if(me.date || me.time) {
                me.mask = '';
                Ext.each(me.format.split(''), function(item) {
                    me.mask += me.maskRel[item] || item;
                },me);
            }

            me.textMask = new me.maskCore(me.mask, me.money);

            me.emptyText = me.textMask.mask('');

            if(me.date || me.time) {
                me.altFormats = me.date ? "d|dm|dmY|d/m|d-m|d/m/Y|d-m-Y|Y-m-d|Y-m-dTg:i:s" : "H:i|Hi";
                me.setValue = me.setDateValue;
            } else {
                me.setValue = me.maskSetValue;
            }

            me.getValue = me.maskGetValue;
            me.onAfter( 'afterrender', me.maskAfterRender, me);
        }

    },

    fnAfterRender: function (field, eOpts) {
        var me = this;

        if(me.setTextAlign) {
            me.inputEl.setStyle('text-align', me.setTextAlign);
        }

        if(me.useUpperCase) {
            field.mon(field.el,'keyup',function() {
                this.setValue(this.getValue().toUpperCase());
            },field);
        }
    },

    fnSpecialKey: function (field, e, eOpts) {
        var me = this;

        if (me.doSpecialKey == true && e.getKey() == e.ENTER) {
            var next = field.next('[isFormField]');
            if (next) {
                e.stopEvent();
                next.focus();
            }
        }
    },

    setLabelBold: function ( value ) {
        var me = this,
            labelBold = 'font-weight: bold;';

        if(value) {
            me.labelStyle = me.labelStyle ? (me.labelStyle + labelBold) : labelBold;
        }
    },

    //<editor-fold desc="region: Mask">

    maskCore: Ext.define('MaskCore', {

        constructor: function(mask, money){
            this.money = money == true;
            this.setMask(mask);
        },

        blankChar: '_',
        money: false,
        moneyZeros: 0,
        moneyPrecision: 0,
        specialChars: {
            'L': /^[A-Z]$/,
            'l': /^[a-z]$/,
            '9': /^[0-9]$/,
            'A': /^[A-Za-z]$/,
            '_': /^.$/
        },
        mask: function(v){
            return this.money ? this.maskMoney(v) : this.maskNormal(v);
        },
        maskNormal: function(v){
            v = this.unmask(v);
            v = v.split('');
            var m = '';
            var i = 0;
            Ext.each(this.maskList, function(item){
                if(Ext.isString(item)){
                    m += item;
                }else{
                    if(v[i] && item.test(v[i])){
                        m += v[i];
                    }else{
                        m += this.blankChar;
                    }
                    i++;
                }
            },this);
            return m;
        },
        maskMoney: function(v){
            v = String(this.unmask(v));
            var negativo = false;
            if(v.indexOf('-') >= 0){
                negativo = true;
                v = v.replace(new RegExp('\[-\]', 'g'), '');
            }

            if(Math.round(v) !== v){
                v = Math.round(Number(Ext.num(v,0)) * Number('1'+Ext.String.leftPad('', this.moneyPrecision, '0')));
            }
            v = Ext.String.leftPad(Number(Ext.num(v,0)), this.moneyZeros, '0');
            v = v.split('');
            var m = '';
            var i = v.length -1;
            var mi = this.maskList.length -1;
            while(i >= 0){
                var item = this.maskList[mi];
                if(mi >= 0){
                    if(Ext.isString(item)){
                        m = item + m;
                    }else{
                        if(v[i] && item.test(v[i])){
                            m = v[i] + m;
                        }else{
                            m = '0' + m;
                        }
                        i--;
                    }
                    mi--;
                }else{
                    if(this.specialChars['9'].test(v[i])){
                        m = v[i] + m;
                    }
                    i--;
                }
            }
            if(this.textMask.indexOf('#') >= 0){
                m = this.textMask.slice(0, this.textMask.indexOf('#')) + (negativo ? '-' : '') + m;
            }
            return m;
        },
        unmask: function(v){
            v = v === undefined ? '' : v;
            return this.money ? this.unmaskMoney(v) : this.unmaskNormal(v);
        },
        unmaskNormal: function(v){
            v = String(v);
            var specialChars = '';
            Ext.iterate(this.specialChars, function(k){
                specialChars += k;
            });
            var chars = this.textMask.replace(new RegExp('\['+specialChars+'\]', 'g'), '');

            v = v.replace(new RegExp('\['+chars+'\]','g'), '');
            v = v.split('');
            var m = '';
            var i = 0;
            Ext.each(this.maskList, function(item){
                if(!Ext.isString(item)){
                    if(v[i] && item.test(v[i])){
                        m += v[i];
                    }
                    i++;
                }
            },this);
            return m;
        },
        unmaskMoney: function(v){
            v = String(v);

            if(v.indexOf('+') >= 0){
                v = v.replace(new RegExp('\[-\]', 'g'), '');
            }

            var negativo = v.indexOf('-') >= 0;

            var precision = v.lastIndexOf('.');
            if(precision === -1){
                precision = 0;
            }else{
                precision = v.length - precision - 1;
            }
            if(precision > this.moneyPrecision){
                v = v.slice(0, - (precision - this.moneyPrecision));
                precision = this.moneyPrecision;
            }
            var specialChars = '';
            Ext.iterate(this.specialChars, function(k){
                specialChars += k;
            });
            var chars = this.textMask.replace(new RegExp('\['+specialChars+'\]', 'g'), '');
            v = v.replace(new RegExp('\['+chars+'\]','g'), '');
            v = v.split('');
            var m = '';
            var i = v.length -1;
            var mi = this.maskList.length -1;
            while(i >= 0){
                if(mi >= 0){
                    var item = this.maskList[mi];
                    if(!Ext.isString(item)){
                        if(v[i] && item.test(v[i])){
                            m = v[i] + m;
                        }
                        i--;
                    }
                    mi--;
                }else{
                    if(v[i] && this.specialChars['9'].test(v[i])){
                        m = v[i] + m;
                    }
                    i--;
                }
            }

            m = this.parsePrecision(m, precision);

            if(negativo){
                m = '-'+m;
            }

            return String(m);
        },
        parsePrecision: function(v,precision){
            v = String(v);

            var sinal = v.indexOf('-') >= 0 ? '-' : '';

            v = v + Ext.String.leftPad('', this.moneyPrecision - precision, '0');
            if(this.moneyPrecision > 0){
                v = Ext.String.leftPad(v, this.moneyPrecision+1, '0');
                return sinal + String(Ext.num(v.slice(0, -this.moneyPrecision),0))+'.'+v.slice(-this.moneyPrecision);
            }else{
                return sinal + v;
            }
        },
        parseMask: function(mask){
            var regList = [];

            if(this.money){
                this.moneyZeros = 0;
                while(mask.indexOf('0') >= 0){
                    mask = mask.replace('0', '9');
                    this.moneyZeros++;
                }
                this.moneyPrecision = Math.min(mask.length - Math.max(mask.lastIndexOf('.'), mask.lastIndexOf(',')) -1, mask.length);
            }
            //
            Ext.each(mask.match(/<![^<][^!]*!>/g), function(exp){
                regList.push(new RegExp('^'+exp.replace(/(<!)|(!>)/g, '')+'$', ''));
            });
            mask = mask.replace(/<![^<][^!]*!>/g, '?');

            this.textMask = mask;
            if(this.money){
                mask = mask.slice(mask.indexOf('#')+1);
            }

            this.maskList = [];
            var regI = 0;
            var maskArr = mask.split('');
            for(var i = 0; i < maskArr.length; i++){
                if(maskArr[i] === '?'){
                    this.maskList.push(regList[regI]);
                    regI++;
                }else{
                    this.maskList.push(this.specialChars[maskArr[i]]||maskArr[i]);
                }
            }
            return this.maskList;
        },
        getLength: function(v){
            v = this.mask(v);
            var i = v.indexOf(this.blankChar);
            if(i === -1){
                i = v.length;
            }
            return i;
        },
        setMask: function(mask){
            if(!Ext.isEmpty(mask) && mask !== this.oldMask){
                this.oldMkask = mask;
                this.parseMask(mask);
            }else if(Ext.isEmpty(this.oldMask)){
                this.parseMask('');
            }
            return this;
        }
    }),

    maskAfterRender: function() {

        if(this.money) {
            this.inputEl.setStyle('text-align', 'right');
        }

        this.hiddenField = this.inputEl.insertSibling({
            tag: 'input',
            type: 'hidden',
            name: this.name,
            value: this.textMask.mask(this.value)
        }, 'after');

        this.hiddenName = this.name;
        // this.inputEl.dom.removeAttribute('name');
        this.enableKeyEvents = true;

        this.inputEl.on({
            keypress:this.updateHidden,
            keydown: function(e) {
                if(this.readOnly)
                {
                    return false;
                }
                if(e.getKey() === e.BACKSPACE)
                {
                    if(this.money){
                        this.hiddenField.dom.value = this.hiddenField.dom.value.substr(0, this.hiddenField.dom.value.length-1);
                        this.hiddenField.dom.value = this.hiddenField.dom.value.replace(/[.]/g, '');
                        this.hiddenField.dom.value = this.textMask.parsePrecision(this.hiddenField.dom.value, this.textMask.moneyPrecision);
                        this.hiddenField.dom.value = this.textMask.unmask(this.hiddenField.dom.value);
                    }else{
                        this.hiddenField.dom.value = this.hiddenField.dom.value.substr(0, this.hiddenField.dom.value.length-1);
                    }
                    this.updateHidden(e);
                }
                this.keyDownEventKey = e.getKey();
            },
            keyup:this.simpleUpdateHidden, // default samuel
            scope:this
        });

        this.inputEl.value = this.textMask.mask(this.hiddenField.dom.value);
        this.setValue(this.value);

        delete this.emptyText;

    },
    getKeyCode : function(onKeyDownEvent, type) {
        var keycode = {};

        if(this.readOnly) {
            return false;
        }

        keycode.unicode = onKeyDownEvent.getKey();
        keycode.isShiftPressed = onKeyDownEvent.shiftKey;

        keycode.isDelete = ((onKeyDownEvent.getKey() === Ext.EventObject.DELETE && type === 'keydown') || ( type === 'keypress' && onKeyDownEvent.charCode === 0 && onKeyDownEvent.keyCode === Ext.EventObject.DELETE)) ? true: false;
        keycode.isTab = (onKeyDownEvent.getKey() === Ext.EventObject.TAB)? true: false;
        keycode.isBackspace = (onKeyDownEvent.getKey() === Ext.EventObject.BACKSPACE)? true: false;
        keycode.isLeftOrRightArrow = (onKeyDownEvent.getKey() === Ext.EventObject.LEFT || onKeyDownEvent.getKey() === Ext.EventObject.RIGHT)? true: false;
        keycode.pressedKey = String.fromCharCode(keycode.unicode);
        return(keycode);
    },
    updateHidden: function(e) {

        if(this.readOnly || !this.useLocalMask && (!this.date && !this.time)) {
            return false;
        }
        var key = this.getKeyCode(e, 'keydown');
        var kk = this.keyDownEventKey || e.getKey();

        if(!(kk >= e.F1 && kk <= e.F12) && !e.isNavKeyPress()) {
            if(this.inputEl.selectionStart === 0 && this.inputEl.selectionEnd === this.inputEl.value.length) {
                this.hiddenField.dom.value = this.money ? 0 : '';
            }
            if(!key.isBackspace) {
                if(this.money) {
                    this.hiddenField.dom.value = String(this.hiddenField.dom.value) + String(key.pressedKey);
                    this.hiddenField.dom.value = this.hiddenField.dom.value.replace(/[.]/g, '');
                    this.hiddenField.dom.value = this.textMask.parsePrecision(this.hiddenField.dom.value, this.textMask.moneyPrecision);
                    this.hiddenField.dom.value = this.textMask.unmask(this.hiddenField.dom.value);
                } else {
                    var hiddenValue = this.hiddenField.dom.value === 'undefined' ? key.pressedKey : this.hiddenField.dom.value + key.pressedKey;
                    this.hiddenField.dom.value = this.textMask.unmask(hiddenValue);
                }
            }

            this.inputEl.value = this.textMask.mask(this.hiddenField.dom.value);
            this.inputEl.selectionStart = this.textMask.getLength(this.hiddenField.dom.value);
            this.inputEl.selectionEnd = this.inputEl.selectionStart;

            e.preventDefault();
        }
    },
    simpleUpdateHidden: function(e) {
        if(this.readOnly || this.useLocalMask || this.date || this.time) {
            return false;
        }
        this.hiddenField.dom.value = this.inputEl.value;
    },
    getValueWithMask: function() {
        if(this.hiddenField) {
            return this.inputEl.value;
        } else {
            return '';
        }
    },
    getValueWithoutMask: function() {
        if(this.hiddenField) {
            return this.hiddenField.dom.value;
        } else {
            return '';
        }
    },
    getRawValue: function() {
        return this.returnWithMask ? this.getValueWithMask() : this.callParent();
    },
    maskGetValue: function () {
        if (this.returnWithMask) {
            return this.getValueWithMask();
        } else {
            return this.getValueWithoutMask();
        }
    },
    maskSetValue: function (v) {
        if(this.useLocalMask) {
            if(this.inputEl) {
                this.hiddenField.dom.value = this.textMask.unmask(v);
                this.inputEl.value = this.textMask.mask(v);
            }
            this.value = this.textMask.unmask(v);
        } else {
            if(this.inputEl) {
                this.hiddenField.dom.value = v;
                this.inputEl.value = v;
            }
            this.value = v;
        }
    },
    setDateValue: function(v) {
        if(v === 'now') {
            v = new Date();
        }

        if(this.inputEl) {
            v = this.formatDate(this.parseDate(v));
            this.hiddenField.dom.value = v;
            this.inputEl.value = this.textMask.mask(v);
        }
        this.value = v;
    },
    setMask: function(mask) {
        this.textMask.setMask(mask);
        this.setValue(this.hiddenField.dom.value);
    },
    getSubmitData: function() {
        var me = this,
            data = null,
            val;

        if (!me.disabled && me.submitValue && !me.isFileUpload()) {
            val = me.getValue();

            if (val !== null && (me.date || me.time)) {
                data = {};
                data[me.getName()] = Ext.util.Format.date(Ext.Date.parse(val,me.format),me.submitFormat);
            } else {
                data = me.callParent();
            }

        }

        return data;
    }

    //</editor-fold>

});