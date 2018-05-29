const TV = {
    open: function(){
        console.log('打开电视');
    },
    close: function(){
        console.log('关闭电视');
    }
}

const AirConditional = {
    //统一的接口
    open: function(){
        console.log('打开空调');
    },
    close: function(){
        console.log('关闭空调');
    }
}

const Ty = {
    excute: function(){
        console.log('打开投影');
    },
    undo: function(){
        console.log('关闭投影');
    }
}

function setCommand(obj){
    //代理所有的遥控
    const o = {};
    if("open" in obj){
        o.excute = obj.open;
    }
    if("excute" in obj){
        o.excute = obj.excute;
    }
    // obj.open();
    // obj.close();
    return o;
}

const tvCommander = setCommand(TV);
tvCommander.excute();