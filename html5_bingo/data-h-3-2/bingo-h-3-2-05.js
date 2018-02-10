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
  '愛屋及烏,ㄞˋ　ㄨ　ㄐㄧˊ　ㄨ,比喻愛一個人也連帶的關愛與他有關的一切。,林大哥是表姐的好朋友，他總是愛屋及烏，對我也特別照顧。'
, '脫穎而出,ㄊㄨㄛ　ㄧㄥˇ　ㄦˊ　ㄔㄨ,比喻顯露才能，超越眾人。,這次繪畫比賽，哥哥從一百名參賽者中脫穎而出，獲得首獎。'
, '骨瘦如柴,ㄍㄨˇ　ㄕㄡˋ　ㄖㄨˊ　ㄔㄞˊ,形容非常消瘦的樣子。,這場大病把老王折磨得骨瘦如柴，令人心痛。'
, '血氣方剛,ㄒㄩㄝˋ　ㄑㄧˋ　ㄈㄤ　ㄍㄤ　（又音）ㄒㄧㄝˇ　ㄑㄧˋ　ㄈㄤ　ㄍㄤ,泛指年輕人精力正當旺盛，易於衝動。,這小伙子血氣方剛、行事叛逆，得多加輔導。'
, '袖手旁觀,ㄒㄧㄡˋ　ㄕㄡˇ　ㄆㄤˊ　ㄍㄨㄢ,形容置身事外不予過問之意。,對於有需要救助的急難家庭，我們絕不能袖手旁觀，要適時伸出援手。'
, '盲人摸象,ㄇㄤˊ　ㄖㄣˊ　ㄇㄛ　ㄒㄧㄤˋ,比喻以偏概全，不能了解真相。,對事情還沒有全面了解，就急著下判斷，不就等於盲人摸象嗎？'
, '緊迫盯人,ㄐㄧㄣˇ　ㄆㄛˋ　ㄉㄧㄥ　ㄖㄣˊ,籃球運動中指密切注視並防止對方進攻得分的動作。,這次籃球比賽，對方採取一對一緊迫盯人的戰術，使我隊一直無法發揮攻勢。'
, '擠眉弄眼,ㄐㄧˇ　ㄇㄟˊ　ㄋㄨㄥˋ　ㄧㄢˇ,擠弄眉毛眼睛以向人暗示或表情意。,他們兩人在那兒擠眉弄眼的，不知道在玩什麼把戲？'
, '無理取鬧,ㄨˊ　ㄌㄧˇ　ㄑㄩˇ　ㄋㄠˋ,比喻不合情理的吵鬧或故意搗亂。,與人相處應該理性溝通意見，千萬不可無理取鬧。'
//------------------------------------題庫結束,以下請勿修改
);

