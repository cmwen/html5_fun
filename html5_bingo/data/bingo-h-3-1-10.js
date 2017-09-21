﻿//-----------------------------------------------------------
// BINGO 題庫設定檔
//-----------------------------------------------------------
seperator = ",";	//題目字串中，各欄位的分隔符號

//指定答案、題幹
answer_field_number = 0;		//答案在第幾欄位(由 0 起算)
question_field_number = 3;		//題幹在第幾欄位(由 0 起算)

description_field_number = 2;	//解釋在第幾欄位(由 0 起算)

auto_replace_answer = "yes";	//是否自動將題幹中帶有的答案字串用括號取代

//
// 題庫
//
// 每對引號中的即是一個問題的設定
//
question_lines=new Array(
//------------------------------------下一行開始增加題目
  '虛懷若谷,ㄒㄩ ㄏㄨㄞˊ ㄖㄨㄛˋ ㄍㄨˇ,形容為人謙虛，能接納他人的意見。,待人處世要虛懷若谷，不可驕傲自滿。'
, '不速之客,ㄅㄨˋ ㄙㄨˋ ㄓ ㄎㄜˋ,不曾邀請而自己前來的客人。,當已安排好出遊活動時，最怕不速之客的來訪。'
, '一丘之貉,ㄧ ㄑㄧㄡ ㄓ ㄏㄜˊ,比喻行徑一樣低劣的同類。,他們根本是一丘之貉，與盜匪沒有兩樣。'
, '手忙腳亂,ㄕㄡˇ ㄇㄤˊ ㄐㄧㄠˇ ㄌㄨㄢˋ,形容做事慌亂，沒有條理。,生手開車，難免手忙腳亂。'
, '差強人意,ㄔㄚ ㄑㄧㄤˊ ㄖㄣˊ ㄧˋ,本指尚可振奮人心。後用以形容大體上尚能令人勉強滿意。,他今天的表現差強人意，希望下一場比賽他能發揮應有的實力。'
//------------------------------------題庫結束,以下請勿修改
);


