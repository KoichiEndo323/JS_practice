//id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示
$('#tab-contents.tab[id!="tab1"]').hide();

$('#tab-menu a').on('click',function(event){
  $("#tab-contents.tab").hide();
  //.removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $("#tab-menu.active").removeClass("active");
  //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド,$(this)のとき
  $(this).addClass("active");
  //.attr()は、HTML要素の属性を取得したり設定できるメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});