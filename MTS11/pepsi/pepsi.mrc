alias pepsi.005 {
  %:echo  $+ %::c1 $+ ³ $+ %::c4 available $+ %::c2 $+ : $+ %::c3 %::value %:comments
  %:echo  $+ %::c1 $+ ÀÄ[ $+ %::c4 end $+ %::c3 connect info.
}

alias pepsi.251 {
  %:echo  $+ %::c1 $+ ÚÄ[  $+ %::c4 $+ $server $+ 's  $+ %::c3 lusers.
  %:echo  $+ %::c1 $+ ³ $+ %::c4 usersÿÿÿÿ $+ %::c2 $+ : $+ %::c3 $calc(%::users + %::text) users ( $+ $calc((%::text / (%::users + %::text)) * 100) $+ $chr(37) invisible)
  %:echo  $+ %::c1 $+ ³ $+ %::c4 serversÿÿ $+ %::c2 $+ : $+ %::c3 %::value
}

alias pepsi.266 {
  %:echo  $+ %::c1 $+ ³ $+  $+ %::c4 globalÿÿÿ $+ %::c2 $+ : $+  $+ %::c3 %::users ( $+ $round($calc(%::users / %::value * 100),2) $+ $chr(37) of the max)
  %:echo  $+ %::c1 $+ ÀÄ[ $+ %::c4 end $+ %::c3 lusers.
}

alias pepsi.311 {
  %:echo ÿÿÿÿÿ00ÚÄ--15-00Ä15ÄÄ-14--ÿ-Äÿÿ-15
  %:echo ÿÿÿÿÿ00³wh15o14is10
  %:echo 00ÚÄÄÄÄÁ15Ä00Ä15ÄÄ00ÄÂÄÄÄ---ÄÄÄ15Ä00--15ÄÄ00Ä15Ä--14Ä15Ä-14--ÄÄÄÄ---Äÿ-Äÿ-15ÿÿÿ
  %:echo 00| $+ %::c1 $sfill($2,9) $+ 00|15 $rep($3) 14( $+ %::c1 $+ $internic($gettok($3,-1,46)) $+ 14)
  %:echo 0:na15m00e15ÿÿÿÿÿÿ00:15 $4-
}
alias pepsi.319 { %:echo 0.c15han14n15el14s15ÿÿ00. $rep($2-) }
alias pepsi.317 { 
  %:echo 0:0s15ig14n15o14nÿÿÿÿ15: $dur($calc($ctime - $ctime(%::signontime)),5) ago
  %:echo 0|i15d14leÿÿÿÿÿÿ15| $dur($2,5) 
}
alias pepsi.312 { %:echo 0.s15er14v15e14r15ÿÿÿÿ. $rep($1) }
alias -l rep { var %. =  $+ %::c1 $+ . $+  $+ %::c3 | var %@ =  $+ %::c1 $+ @ $+  $+ %::c3 | return $replace($$1,@,%@,.,%.) }
alias -l sfill { 
  if ($1 != $null) {
    var %r = $left($1,$calc($2 - 1))
    var %c = $len($strip(%r))
    if (%c != $2) { var %spcr = $str($chr(255),$calc($2 - %c)) }
    var %r = %r $+ %spcr
    return %r
  } 
}
alias -l dur {
  var %t = $duration($1)
  if ($2 = 5) { return $remove($replace(%t,secs,s,sec,s,mins,m,min,m,hrs,h,hr,h,days,d,day,d,wks,w,wk,w),$chr(32)) }
  if ($2 = 6) { return $remove($replace(%t,mins,:,min,:,hrs,:,hr,:,days,:,day,:,wks,:,wk,:),$chr(32),secs,sec) }
}
