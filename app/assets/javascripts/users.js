$(function() {

  function appendUser(user) {
      var html = `
                 <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
                `;
    $("#user-search-result").append(html);
    } 

    function addNoUser() {

      var html =`
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">ユーザーが見つかりません</p>
                </div>
                `;
    $("#user-search-result").append(html);
  }
  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: "/users",
      dataType: 'json',
      data: { keyword: input }
    })
      .done(function(users){
        $('#user-search-result').empty();
        if (users.length !== 0){
          users.forEach(function(user){
            appendUser(user);
          });
        }else if (input.length == 0) {
          return false;
        }else{
          addNoUser();
        }
      })
      .fail(function(users){
        console.log('失敗です');
      });
  });

  $(document).on('click', ".chat-group-user__btn--add", function(){
    console.log();

    //console.log()でイベント発火の有無を確認しましょう
  
  });
});