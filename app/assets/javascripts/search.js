$(document).on('turbolinks:load', function() {
$(function(){
var user_list = $("#user-search-result");
var member_list  = $("#member_search_result")

$('chat-group-user').each(function(){
  appendMembers
});

  function appendUsers(user){
    var html =
      `<div class="chat-group-user chat-group-users clearfix js-chat-user">
        <p class="chat-group-user__name">
        ${user.name}
        </p>
        <a class="chat-group-user chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id="${user.id}" data-user-name="${user.name}">追加
        </a>
      </div>`
      user_list.append(html);
  }

  function appendMembers(name, user_id){
    html =
    `<div class="chat-group-user clearfix js-chat-member" id="${user_id}">
     <input name='group[user_ids][]' type='hidden' value="${user_id}">
     <p class="chat-group-user__name">
     ${name}
     </p>
     <a class='member_search_remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除
     </a>
     </div>`
      member_list.append(html);
  }
  

  $(".chat-group-form-member").on("keyup", function(){
    var input = $(".chat-group-form-member").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(members) {
      $("#user-search-result").empty();
        if (members.length !== 0) {
          members.forEach(function(user){
            appendUsers(user);
          });
        }
      })
    .fail(function(){
      alert("ユーザー検索に失敗しました")
    })
  });

  $('#user-search-result').on("click", '.chat-group-user__btn', function() {
    var self = this;
    var name = $(self).attr("data-user-name");
    var user_id = $(self).attr("data-user-id");
    $(self).parent().remove();
    appendMembers(name, user_id);
  });
  $(document).on("click", '.member_search_remove', function() {
    $(this).parent().remove();
  });
});
});