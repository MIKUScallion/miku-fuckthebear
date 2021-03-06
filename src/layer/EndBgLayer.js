var EndBgLayer = cc.Layer.extend({
    ctor : function(){
        this._super();
    },
    init:function(){
        var winsize = cc.director.getWinSize();
        //将坐标封装成对象
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
        var endBgSprite = new cc.Sprite(res.endBg);
        endBgSprite.setPosition(centerpos);
        this.addChild(endBgSprite);
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(res.endBgMusic,true); 
    }
});