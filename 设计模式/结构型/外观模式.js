// 子系统中的一组接口提供一个统一的高层接口，使子系统更容易使用 
// 换句话说，封装好，外部直接使用，不需要知道内部的细节
// 绑定事件
function addEvent(element, event, handler) {
    if (element.addEventListener) {
      element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, handler);
    } else {
      element['on' + event] = fn;
    }
  }
  
  // 取消绑定
  function removeEvent(element, event, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(event, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, handler);
    } else {
      element['on' + event] = null;
    }
  }