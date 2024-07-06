
var typeSelect = document.createElement('div');
  typeSelect.innerHTML = createSelect()
  typeSelect.style.position = 'fixed';
  typeSelect.style.width = '97px'
  typeSelect.style.height='30px'
  typeSelect.style.top = '10px';
  typeSelect.style.right = '20px';
  typeSelect.style.zIndex = '999'
  typeSelect.style.backgroundColor = '#d61b1b';
  typeSelect.style.margin ='10px 10px'
  
  document.body.zIndex ='-1'
  document.body.appendChild(typeSelect);
  
  let vl = document.querySelector('video');
  document.getElementById("v_speed_c_go_1_16").addEventListener("change", function () {
      console.log(this.value)
      if(vl){
          vl.playbackRate = this.value;
      }
  });

function createSelect() {
    return "<select id='v_speed_c_go_1_16' style='width:100%;height:100%;'>" +
        "<option value ='1'>1</option>" +
        "<option value ='2'>2</option>" +
        "<option value ='3'>3</option>" +
        "<option value ='4'>4</option>" +
        "<option value ='6'>6</option>" +
        "<option value ='8'>8</option>" +
        "<option value ='10'>10</option>" +
        "<option value ='12'>12</option>" +
        "<option value ='14'>14</option>" +
        "<option value ='16'>16</option>" +
        "</select>"
  }