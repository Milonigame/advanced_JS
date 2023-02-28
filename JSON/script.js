'use strict';

const persone={
    name:'Alex',
    tel: '+657767675',
    parents:{
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));