import {AcGameObject} from "@/assets/scripts/AcGameObject";
import {Ceil} from "@/assets/scripts/Ceil";

export class Snake extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Ceil(info.r, info.c)];   //存放蛇的身体 cells[0]为蛇头
        this.next_cell = null;
        this.speed = 5; //每秒钟走五个格子
        this.direction = -1; //表示没有指令
        this.status = "idle" // idle 表示静止  move 表示移动  die表示死亡

        // 偏移量,四个方向
        this.dr = [-1, 0, 1, 0];
        this.dc = [0, 1, 0, -1];

        //表示回合数目
        this.step = 0;
        this.eps = 1e-2;  ///误差

        this.eye = 0;
        if(this.id === 1) this.eye = 2;

        this.eye_dx = [
            [-1,1],
            [1,1],
            [1,-1],
            [-1,-1],
        ];
        this.eye_dy = [
            [-1,-1],
            [-1,1],
            [1,1],
            [-1,1],
        ];
    }

    start() {

    }

    set_direction(d) {
        this.direction = d;
    }

    check_tail_increase() {  //监测蛇尾是不是需要增加
        if (this.step <= 10) {
            return true;
        }

        if (this.step % 3 === 1) {
            return true;
        }

        return false;
    }

    next_step() {  //更换蛇的状态
        const d = this.direction;
        this.next_cell = new Ceil(this.cells[0].r + this.dr[d], this.cells[0].c + this.dc[d]);
        this.direction = -1;
        this.eye = d;
        this.status = "move";
        this.step++;

        const k = this.cells.length;
        for (let i = k; i > 0; i--) {
            this.cells[i] = JSON.parse(JSON.stringify(this.cells[i - 1]));

        }

        if(!this.gamemap.check_vaild(this.next_cell)){  // 不合法就去世
            this.status = "die";
        }
    }

    update_move() {

        const dx = this.next_cell.x - this.cells[0].x;
        const dy = this.next_cell.y - this.cells[0].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.eps) {
            this.status = "idle";  //走完了 停下来
            this.cells[0] = this.next_cell;  //添加一个蛇头
            this.next_cell = null;

            if(!this.check_tail_increase()){
                this.cells.pop();
            }

        } else {
            const move_distance = this.speed * this.timedelta / 1000  //每两帧之间移动的距离
            this.cells[0].x += move_distance * dx / distance;
            this.cells[0].y += move_distance * dy / distance;

            if (!this.check_tail_increase()) {
                const k = this.cells.length;
                const tail = this.cells[k - 1], tail_target = this.cells[k - 2];
                const tail_dx = tail_target.x - tail.x;
                const tail_dy = tail_target.y - tail.y;
                tail.x += move_distance * tail_dx / distance;
                tail.y += move_distance * tail_dy / distance;

            }
        }
    }

    update() {
        if (this.status === "move") {
            this.update_move();
        }

        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        if(this.status === 'die'){
            ctx.fillStyle = "white";
        }


        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2 * 0.8, 0, Math.PI * 2);
            ctx.fill();
        }

        for (let i = 1; i<this.cells.length;i++){
            const a = this.cells[i -1], b = this.cells[i];
            if(Math.abs(a.x - b.x) < this.eps && Math.abs(a.y - b.y) < this.eps){
                continue;
            }
            if(Math.abs(a.x - b.x) < this.eps){
                ctx.fillRect((a.x-0.4)*L,Math.min(a.y,b.y)*L,L*0.8,Math.abs(a.y-b.y)*L);
            }
            else{
                ctx.fillRect(Math.min(a.x,b.x)*L,(a.y-0.4)*L,Math.abs(a.x-b.x)*L,L*0.8);
            }
        }

        ctx.fillStyle = "black";
        for(let i=0;i<2;i++){
            const eye_x = (this.cells[0].x + this.eye_dx[this.eye][i]*0.25)*L;
            const eye_y = (this.cells[0].y + this.eye_dy[this.eye][i]*0.25)*L;
            ctx.beginPath();
            ctx.arc(eye_x,eye_y,L*0.1,0,Math.PI*2);
            ctx.fill();
        }
    }
}