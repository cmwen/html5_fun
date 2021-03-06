﻿//-----------------------------------------------------------
// BINGO 題庫設定檔
//-----------------------------------------------------------
seperator = ",";	//題目字串中，各欄位的分隔符號

//指定答案、題幹
answer_field_number = 0;		//答案在第幾欄位(由 0 起算)
question_field_number = 3;		//題幹在第幾欄位(由 0 起算)

//針對成語的額外欄位
phonics_field_number = 1;		//注音符號在第幾欄位(由 0 起算)
description_field_number = 2;	//解釋在第幾欄位(由 0 起算)

auto_replace_answer = "yes";	//是否自動將題幹中帶有的答案字串用括號取代

//
// 題庫
//
// 每對引號中的即是一個問題的設定
//
question_lines=new Array(
//------------------------------------下一行開始增加題目
  '與日俱增,ㄩˇ　ㄖˋ　ㄐㄩˋ　ㄗㄥ,隨著時間的流逝而不斷的增加。,外公雖已逝世多年，大家對他的懷念卻與日俱增。'
, '山窮水盡,ㄕㄢ　ㄑㄩㄥˊ　ㄕㄨㄟˇ　ㄐㄧㄣˋ,比喻走投無路，陷入絕境。,前面看起來已經山窮水盡，無法前進了，我們換一條路走吧！'
, '忘恩負義,ㄨㄤˋ　ㄣ　ㄈㄨˋ　ㄧˋ,受人恩惠不知報答，反而做出對不起恩人的事情。,他向來有情有義，絕非忘恩負義之人。'
, '肝腦塗地,ㄍㄢ　ㄋㄠˇ　ㄊㄨˊ　ㄉㄧˋ,比喻人盡忠竭力，不惜犧牲生命之意。,為了國家和人民，就是肝腦塗地，我們也在所不惜。'
, '借花獻佛,ㄐㄧㄝˋ　ㄏㄨㄚ　ㄒㄧㄢˋ　ㄈㄛˊ,比喻借用他人的東西來作人情。,這本書是別人送給我的禮物，現在我借花獻佛，轉送給你。'
, '枉費心機,ㄨㄤˇ　ㄈㄟˋ　ㄒㄧㄣ　ㄐㄧ,白白的浪費心思。形容徒勞無功。,弟弟想盡辦法不去上學，結果只是枉費心機而已。'
, '鵬程萬里,ㄆㄥˊ　ㄔㄥˊ　ㄨㄢˋ　ㄌㄧˇ,比喻前程遠大，不可限量。,校長祝福每一位畢業生都能夠鵬程萬里。'
, '漸趨式微,ㄐㄧㄢˋ　ㄑㄩ　ㄕˋ　ㄨㄟˊ,慢慢傾向衰落。,自從工業革命後，許多傳統的手工藝漸趨式微。'
, '升堂入室,ㄕㄥ　ㄊㄤˊ　ㄖㄨˋ　ㄕˋ,比喻學問或技藝循序漸進，而達到高深的境界。,彈琴只是我的興趣而已，還不到升堂入室的程度啦！'
, '東拼西湊,ㄉㄨㄥ　ㄆㄧㄣ　ㄒㄧ　ㄘㄡˋ,把零星的事物雜湊在一起。比喻到處張羅。 ,她東拼西湊，好不容易才籌夠錢，為兒子繳了醫藥費。'
, '見錢眼開,ㄐㄧㄢˋ　ㄑㄧㄢˊ　ㄧㄢˇ　ㄎㄞ,形容人貪婪愛財，唯利是圖。,和這種見錢眼開的人交易，要格外小心。'
//------------------------------------題庫結束,以下請勿修改
);


