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
  '老當益壯,ㄌㄠˇ ㄉㄤ ㄧˋ ㄓㄨㄤˋ,年紀雖大但志氣卻更加豪壯。,他雖然上了年紀卻老當益壯，登山健行一點也不輸給年輕人。'
, '三頭六臂,ㄙㄢ ㄊㄡˊ ㄌㄧㄡˋ ㄅㄧˋ,比喻人神通廣大，力強可畏。,任憑那歹徒有三頭六臂，警方也要將他逮捕歸案。'
, '堂堂正正,ㄊㄤˊ ㄊㄤˊ ㄓㄥˋ ㄓㄥˋ,原形容軍容強大整齊。後用以形容光明正大的樣子。,做人要堂堂正正，豈可做出有愧天地良心的事。'
, '一刀兩斷,ㄧ ㄉㄠ ㄌㄧㄤˇ ㄉㄨㄢˋ,比喻斷絕關係。,離婚之後，他們夫妻倆便一刀兩斷，沒有往來。'
, '養精蓄銳,ㄧㄤˇ ㄐㄧㄥ ㄒㄩˋ ㄖㄨㄟˋ,培養精神，積蓄力量。,他這幾年來養精蓄銳，勤加練習，期望在這次比賽中能擊倒對手。'
//------------------------------------題庫結束,以下請勿修改
);


