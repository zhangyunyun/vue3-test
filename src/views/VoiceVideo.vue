<template>
  <div class="voice">
    <div class="content">
      <div class="showChat">
        <!--聊天记录列表-->
        <div class="messageCont">
          <div class="message-list">          
            <p class="send-time">2019-11-05 09:25</p>
            <div class="msg-info">
              <div class="user-avatar">
                <img src="@/assets/avatar5.png" alt="">
              </div>
              <div class="user-send">
                <img src="@/assets/voice-default.png" alt="">
                <p>4<span>"</span></p>
              </div>
            </div>
          </div>
          <div class="message-list self">          
            <p class="send-time">2019-11-05 09:25</p>
            <div class="msg-info">
              <div class="user-avatar">
                <img src="@/assets/avatar5.png" alt="">
              </div>
              <div class="user-send">
                <img src="@/assets/voice-default.png" alt="">
                <p>4<span>"</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toolBar" ref="toolBar" v-show="isShow">
      <div class="toolInner">
        <div class="tool">
          <div class="toolTips">
            <span></span>
          </div>
          <div class="toolCont">
            <div class="contClose" ref="contClose">
              <span class="text">松开 取消</span>
              <span class="close">X</span>
            </div>
            <div class="contText" ref="contText">
              <span class="text">转文字</span>
              <span class="close">文</span>
            </div>
            <div class="contDecorate cur" ref="contDecorate">
              <span class="contPress">松开 发送</span><!--选中就显示，未选中讲究隐藏-->
              <i class="ico_loop"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--录音按钮-->
    <div class="toolBtn">
      <div class="btn">
        <button class="yuyinanniu" id="btn_record" ref="btnTag" @touchstart="beginRecordAction" @touchmove="moveRecordAction" @touchend="stopRecordAction">按住 说话</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref, reactive } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup(){
    let isShow = ref(false) //是否显示
    let longClick = ref(0) //长按初始值

    //手指移动相关
    let posStart = ref(0) //初始化起点坐标
    let posEnd = ref(0) //初始化终点坐标
    let posMove = ref(0) //初始化滑动坐标

    let loop = reactive({
      timer:null
    })
    function beginRecordAction(e){
      // console.log(e)
      loop.timer = setTimeout(() => {
        longClick.value = 1
        e.preventDefault() //阻止浏览器默认行为
        posStart.value = e.touches[0].clientY
        //显示录影，隐藏暂停
        isShow.value = !isShow.value
      }, 0)
    }
    function moveRecordAction(e){

    }
    function stopRecordAction(e){

    }
    return {
      isShow,
      longClick,
      loop,
      beginRecordAction,
      moveRecordAction,
      stopRecordAction
    }
  }
});
</script>

<style lang="scss" scoped>
h1{
  font-size:.3rem;
  font-weight:bold;
}
.voice{
  height:100vh;
  background:#eeeeee;
}
.content{
  padding:10px;
}
.showChat{
  .messageCont{
    position:relative;
  }
  .message-list {
    display:none;
    padding:5% 0;
    &:first-child{
      padding-top:0;
    }
    &:last-child{
      padding-bottom:0;
    }
    &.self{
      .msg-info{
        flex-direction: row-reverse;
        .user-send{
          margin-left: 0;
          margin-right: 4%;
          flex-direction: row-reverse;
          &::after{
            content: "";
            border: 6px solid transparent;
            border-left: 6px solid #96eb68;
            position: absolute;
            top: calc(50% - 6px);
            left: initial;
            right: -12px;
          }
          img{
            margin-left: 0;
            margin-right: 10px;
            transform:rotatey(180deg)
          }
          p{
            margin-left: 0;
            margin-right: 5px;
          }
        }
      }
    }
    .send-time{
      color: #999;
      width: 100%;
      font-size:13px;
      text-align:center;
    }
    .msg-info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-top: 2%;
      height: 6%;
      .user-avatar {
        width: 38px;
        height:38px;
        img{
          width:100%;
          height:100%;
        }
      }
      .user-send {
        width: 50%;
        height:35px;
        line-height:35px;
        margin-left: 4%;
        margin-top: 1%;
        position: relative;
        background-color: #96eb68;
        border-radius: 3px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        &::after{
          content: "";
          border: 6px solid transparent;
          border-right: 6px solid #96eb68;
          position: absolute;
          top: calc(50% - 6px);
          left: -12px;
        }
        img{
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }
        p{
          color: #4d4d4d;
          font-size: 4.5vw;
          margin-left: 5px;
        }
      }
    }
  }
}
.toolBtn{
  height: 65px;
  .btn{
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    background:#f5f5f5;
    padding:10px;
    text-align:center;
    height:65px;
    box-sizing:border-box;
    button{
      display:block;
      width:200px;
      height:35px;
      line-height:37px;
      margin:auto;
      background:none;
      text-align: center;
      font-size:14px;
      color:#333;
      background:#fff;
      border-radius:3px;
    }
  }
}
.toolBar{
  z-index:999;
  position:fixed;
  background:rgba(0,0,0,.5);
  left:0;
  right:0;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  .toolInner{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    .tool{
      height:100%;
      box-sizing:border-box;
    }
    .toolTips{
      position:relative;
      margin: auto;
      width:140px;
      height:45px;
      line-height:45px;
      background:#96eb68;
      border-radius:8px;
      &::after{
        content: "";
        border: 10px solid transparent;
        border-top: 10px solid #96eb68;
        position: absolute;
        bottom: -20px;
        left:calc(50% - 5px);
      }
    }
    .toolCont{
      margin-top:145px;
      position:relative;
      .contClose,.contText{
        position:absolute;
        top:-90px;
        width:100px;
        height:100px;
        text-align:center;
        color:#c0c0c0;
        font-size:13px;
        .text{
          display:block;
          width:100%;
          text-align:center;
        }
        .close{
          margin:5px auto 0;
          width:50px;
          height:50px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#565656;
          border-radius:50%;
        }  
        &.cur{
          .close{
            color:#3c3c3c;
            background:#ececec;
          }
        }
      }
      .contClose{
        left:30px;
        .close{
          transform: rotate(-30deg);
        }
      }
      .contText{
        right:30px;
        .close{
          transform: rotate(30deg);
        }
      }
      .contDecorate{
        position:relative;
        height:90px;
        background:#565656;
        border-radius:100% 100% 0 0;
        display:flex;
        align-items:center;
        justify-content:center;
        &.cur{
          background:linear-gradient(to bottom, #9e9e9e, #ececec);
          border-top:1px solid #fff;
          .ico_loop{
            background:url(@/assets/iconvoice-default.png) no-repeat;
            background-size:100% 100%;
          }
          .contPress{
            display:flex;
          }
        }
        .ico_loop{
          display:block;
          width:20px;
          height:20px;
          background:url(@/assets/iconvoice-gray.png) no-repeat;
            background-size:100% 100%;
        }
        .contPress{
          position:absolute;
          left:0;
          right:0;
          top:-25px;
          width:100%;
          height:20px;
          line-height:20px;
          display:none;
          align-items:center;
          justify-content:center;
          color:#c0c0c0;
          font-size:13px;
        }
      }
    }
  }
}
</style>