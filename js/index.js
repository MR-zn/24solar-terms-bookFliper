class Flip {
  // 初始化
  init() {
    $('.left .author').css({
      'margin-left': '20px'
    })
    $('.right .author').css({
      'margin-left': '-20px'
    })

    this.leftBind()
    this.rightBind()
  }

  // hover进入事件
  hoverEnter(start, tar) {
    $(tar).stop().animate({
      marginLeft: start
    }, 5);
  }

  // hover离开事件
  hoverLeave(leave, tar) {
    $(tar).stop().animate({
      marginLeft: leave
    }, 5);
  }

  // 左侧按钮绑定事件
  leftBind() {
    let _this = this
    $('.left .author').unbind()
    $('.left .author').bind({
      mouseenter: function (e) {
        // Hover event handler
        _this.hoverEnter('0px', e.target)
      },
      mouseleave: function (e) {
        // Hover event handler
        _this.hoverLeave('20px', e.target)
      },
      click: function (e) {
        let _index = $(e.target).index()
        // console.log(_index);
        if (_index === 0) {
          // 翻到第一页
          $("#book").turn("page", 1)
          // 按钮变换位置
          $('.right').prepend($(`.left .author`))
          _this.init()
        } else {
          // 翻页效果
          $("#book").turn("page", $(this).prev().data('page'))
          $('.right').prepend($(`.left .author:gt(${_index-1})`))
        // 重新绑定事件和样式
          _this.init()
        }
      }
    })
  }

  // 右侧按钮绑定事件
  rightBind() {
    let _this = this
    $('.right .author').unbind()
    $('.right .author').bind({
      mouseenter: function (e) {
        // Hover event handler
        _this.hoverEnter('0px', e.target)
      },
      mouseleave: function (e) {
        // Hover event handler
        _this.hoverLeave('-20px', e.target)
      },
      click: function (e) {
        // console.log($(this).data('page'))
        // 翻页
        $("#book").turn("page",$(this).data('page'))
        let _index = $(e.target).index()
        $('.left').append($(`.right .author:lt(${_index+1})`))
        // 重新绑定事件和样式
        _this.init()
      }
    })
  }
}


fliper = new Flip()
fliper.init()