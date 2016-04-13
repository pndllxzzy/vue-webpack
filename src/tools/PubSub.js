/*
* subList: {
*   eventName:[{
*       id,
*       fun
*   }]
* }
*
* */

class PubSub {
    constructor () {
        this.count = 0;
        this.subList = {};
    }

    public (eventName, data) {
        if(this.subList[eventName] && this.subList[eventName].length){
            this.subList[eventName].forEach(function(o){
                setTimeout(function(){
                    o.fun.call(o._this, data)
                }, 0);
            })
        }
    }

    subscribe (eventName, fun, _this) {
        if(fun && fun.constructor === Function){
            this.subList[eventName] = this.subList[eventName] || [];
            this.subList[eventName].push({
                id: this.count,
                fun: fun,
                _this: _this
            });
            return this.count++;
        }
        return -1;
    }

    unsubscribe (eventName, id) {
        if(this.subList[eventName] && this.subList[eventName].length){
            this.subList[eventName] = this.subList[eventName].filter(function(o){
                return o.id != id;
            });
        }
    }
}

export default PubSub;