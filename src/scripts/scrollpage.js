import './app.scss';
import alloyfinger from 'alloyfinger'
import { setTimeout } from 'timers';
console.log(alloyfinger)

class ScrollPage {
    constructor() {
        this.transY = 0;
        this.touchInit()
        this.timer = null;
    }
    scrollHandle() {
        const _this = this;
        if (this.timer) {
            return false
        }

        this.timer = setTimeout(() => {
            $('#container').css({ transform: 'translate(0,' + _this.transY + 'px)' })
            _this.timer = null;
        }, 50)

    }
    touchInit() {
        const _this = this;
        new alloyfinger('body', {
            pointStart: function () {
                //手指触摸屏幕触发
            },
            multipointStart: function () {
                //一个手指以上触摸屏幕触发
            },
            rotate: function (evt) {
                //evt.angle代表两个手指旋转的角度
                // console.log(evt.angle);
            },
            pinch: function (evt) {
                //evt.scale代表两个手指缩放的比例
                // console.log(evt.scale);
            },
            multipointEnd: function () {
                //当手指离开，屏幕只剩一个手指或零个手指触发
            },
            pressMove: function (evt) {
                //evt.deltaX和evt.deltaY代表在屏幕上移动的距离
                // console.log(evt.deltaX);
                console.log(evt);
                console.log(_this.transY);
                _this.transY += evt.deltaY;
                _this.scrollHandle()

            },
            tap: function (evt) {
                //点按触发
                console.log('tap')
            },
            doubleTap: function (evt) {
                //双击屏幕触发
            },
            longTap: function (evt) {
                //长按屏幕750ms触发
            },
            swipe: function (evt) {
                //evt.direction代表滑动的方向
                console.log("swipe" + evt.direction);
                if (evt.direction == "Up") {

                } else if (evt.direction == "Down") {

                }
            },
            singleTap: function (evt) {
                //单击
            }
        });
    }
}
new ScrollPage()


function throttle(func, wait, mustRun) {
    var timeout,
        startTime = new Date();

    return function () {
        var context = this,
            args = arguments,
            curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler  
        if (curTime - startTime >= mustRun) {
            func.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器  
        } else {
            timeout = setTimeout(func, wait);
        }
    };
};