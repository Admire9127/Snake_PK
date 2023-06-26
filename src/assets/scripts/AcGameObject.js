const AC_GAME_OBJ = [];

export class AcGameObject{
    constructor() {
        AC_GAME_OBJ.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start(){  //程序入口

    }

    update(){  //程序运行  每一帧执行一次

    }

    on_destory(){   // 删除之前执行的函数

    }
    destory(){
        this.on_destory();

        for( let i  in AC_GAME_OBJ){
            const obj = AC_GAME_OBJ[i];
            if(obj === this){
                AC_GAME_OBJ.splice(i);
                break;
            }
        }
    }

}


// 使用step函数 以便于每秒刷新60次
let last_timestamp;
function step (timestamp) {
    for(let obj of AC_GAME_OBJ){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }
        else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    return requestAnimationFrame(step);
}
// 可以写 const step = timestamp =>{}

requestAnimationFrame(step);