$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message-list__message-box">
        <div class="message-list__message-box__name">
          ${message.user_name}
          <div class="message-list__message-box__name__time">
            ${message.created_at}
        </div>
      </div>
      <div class="message-list__message-box__text">
        <p class="message-list__message-box__text__img">
          ${message.text}
        </p>
      <img src=${message.image} >
      </div>
      </div>`
     return html;
   } else {
     var html =
      `<div class="message-list__message-box">
        <div class="message-list__message-box__name">
          ${message.user_name}
          <div class="message-list__message-box__name__time">
            ${message.created_at}
        </div>
      </div>
      <div class="message-list__message-box__text">
        <p class="message-list__message-box__text__img">
          ${message.text}
        </p>
      </div>
      </div>`
     return html;
   };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message-list').append(html);
      $('form')[0].reset();
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false); //ここでdisabledを解除して連続で送信できるようにしている
    })
  })
});