alias -l ech.form return $+(14Ç15[11,$1,15]14´15)
alias echelon.whois {
  var %r = $rand(1,4),%r2 = $rand(1,4)
  %:echo $+($str(ÿ,21),14- Ä15-,$str(Ä,%r),00Ä15Ä¿)
  %:echo 14ÖÄÄÄ-15Ä0Ä14Â15[11/whois1515]14ÄÄÄ15ÄÄ14Ä $+ $str(Ä,%r) $+ Ä15ÄÄ14ÄÄÙ
  %:echo $ech.form(nick) %::nick $+ $iif(quakenet isin $server && %::echwhois.auth,11 (15authed as $ifmatch $+ 11)15) $+ $iif(%::operline,11 (15IRC operator11)15) $+ 11,15 %::realname
  %:echo $ech.form(addy) $replace(%::address,@,11@15,.,11.15,~,11~15) $+ $iif($readini($scriptdir $+ nn-echelon.ini,countries,$gettok(%::address,-1,46)),11 $+ $chr(44) $+ 15 $ifmatch)
  if (%::chan) %:echo $ech.form(chan) $replace(%::chan,@#,11@15#,+#,11+15#,$chr(35),14#15)
  if (%::wserver) %:echo $ech.form(serv) $replace(%::wserver,.,11.15) $+ $iif(%::serverinfo,11 $+ $chr(44) $+ 15 $ifmatch)
  if (%::away) %:echo $ech.form(away) %::away
  if (%::idletime) %:echo $ech.form(idle) $duration(%::idletime) $+ 11,15 signed on $duration($calc($ctime - $ctime(%::signontime))) ago
  %:echo 14ÓÄ15-14ÄÄÄÄÁ15[11end15]14Ä15ÄÄ00ÄÄ15Ä14Ä15Ä $+ $str(Ä,%r2) $+ 14Ä-ÿÄ¿
  %:echo $+($str(ÿ,17),14-ÿ-Ä15Ä-00Ä15Ä,$str(Ä,%r2),14Ù)
  unset %::echwhois.auth
}
alias echelon.whowas {
  var %r = $rand(1,4),%r2 = $rand(1,4)
  %:echo $str(ÿ,20) 14- Ä15- $+ $str(Ä,%r) $+ 00Ä15Ä¿
  %:echo 14ÖÄÄÄ-15Ä0Ä14Â15[11/whowas1515]14ÄÄÄ15ÄÄ14Ä $+ $str(Ä,%r) $+ Ä15ÄÄ14ÄÙ
  %:echo $ech.form(nick) %::nick $+ 11,15 %::realname
  %:echo $ech.form(addy) $replace(%::address,@,11@15,.,11.15,~,11~15) $+ $iif($readini($scriptdir $+ nn-echelon.ini,countries,$gettok(%::address,-1,46)),11 $+ $chr(44) $+ 15 $ifmatch)
  if (%::chan) %:echo $ech.form(chan) $replace(%::chan,@#,11@15#,+#,11+15#,$chr(35),14#15)
  if (%::wserver) %:echo $ech.form(serv) $replace(%::wserver,.,11.15)
  if (%::serverinfo) %:echo $ech.form(quit) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss)
  %:echo 14ÓÄ15-14ÄÄÄÄÁ15[11end15]14Ä15ÄÄ00ÄÄ15Ä14Ä15Ä $+ $str(Ä,%r2) $+ 14Ä-ÿÄ¿
  %:echo $str(ÿ,16) 14-ÿ-Ä15Ä-00Ä15Ä $+ $str(Ä,%r2) $+ 14Ù
}
alias echelon.welc {
  if ($1 == 1) {
    var %r = $rand(1,5)
    %:echo $+($str(ÿ,20),14- Ä15-,$str(Ä,%r),Ä00Ä15Ä¿)
    %:echo $+(14ÖÄÄ15ÄÄÄ14ÄÂ15[11welcome15]14ÄÄÄ15,$str(Ä,%r),Ä14Ä-ÄÄÄ) Ù
    %:echo $ech.form(welc) Welcome $2-
  }
  if ($1 == 2) {
    %:echo $ech.form(serv) $left($4,-1)
    %:echo $ech.form(vers) $7
  }
  if ($1 == 3) {
    var %r = $rand(1,5)
    %:echo $ech.form(crea) $5-
    %:echo $+(14ÓÄÄÄÄÄÄÁ15[11end15]14ÄÄ-ÄÄ15,$str(Ä,%r),0ÄÄ15Ä14ÄÄ¿)
    %:echo $+($str(ÿ,16),14- Ä15-,$str(Ä,%r),Ä00Ä15ÄÙ)
  }
}
alias echelon.topic {
  if ($1 == 1) {
    var %r = $rand(1,5)
    %:echo $+($str(ÿ,16),14- Ä15-,$str(Ä,%r),Ä00Ä15Ä¿)
    %:echo $+(14ÖÄÄ15ÄÄÄ14ÄÂ15[11topic15]14ÄÄ15,$str(Ä,%r),Ä14Ä-ÄÄ) Ù
    %:echo $ech.form(topc) $2-
  }
  if ($1 == 2) {
    var %r = $rand(1,5)
    %:echo $ech.form(user) $2
    %:echo $ech.form(time) $asctime($ctime($3-),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss)
    %:echo $+(14ÓÄÄÄÄÄÄÁ15[11end15]14ÄÄ-ÄÄ15,$str(Ä,%r),0ÄÄ15Ä14ÄÄ¿)
    %:echo $+($str(ÿ,16),14- Ä15-,$str(Ä,%r),Ä00Ä15ÄÙ)
  }
}
alias echelon.lusers {
  if ($1 == 1) {
    var %r = $rand(1,5)
    %:echo $+($str(ÿ,25),14- Ä15-,$str(Ä,%r),Ä00Ä15Ä¿)
    %:echo $+(14Ö15[11/lusers15]14Â15[11global info15]14Ä,$str(Ä,%r),Ä15ÄÄ-Ä14-ÄÙ)
    %:echo 14º15 $echelon.align(7,$calc($2 + $3)) 14³15 users total
    %:echo 14º15 $echelon.align(7,$2) 14³15 visible ( $+ $+($int($calc($2 / ($2 + $3) * 100)),%) $+ )
    %:echo 14º15 $echelon.align(7,$3) 14³15 invisible ( $+ $+($int($calc($3 / ($2 + $3) * 100)),%) $+ )
    %:echo 14º15 $echelon.align(7,$4) 14³15 servers
    %:echo 14º15 $echelon.align(7,$int($calc(($2 + $3) / $4))) 14³15 average users per server
    %:echo 14ÇÄÄ15ÄÄÄ0Ä15ÄÄ14ÄÅ15[11local info15]14ÄÄÄ-15ÄÄÄ14ÄÄ -
  }
  if ($1 == 2) { %:echo 14º15 $echelon.align(7,$2) 14³15 operators online }
  if ($1 == 3) { %:echo 14º15 $echelon.align(7,$2) 14³15 unknown connections }
  if ($1 == 4) { %:echo 14º15 $echelon.align(7,$2) 14³15 channels formed }
  if ($1 == 5) {
    var %r = $rand(1,5)
    %:echo 14º15 $echelon.align(7,$3) 14³15 users total
    %:echo 14º15 $echelon.align(7,$6) 14³15 servers
    %:echo $+(14ÓÄ15ÄÄÄ14ÄÄ-ÄÄÁ15[11end15]14ÄÄ15ÄÄ00Ä15ÄÄÄ-14,$str(Ä,%r),15ÄÄ14Ä¿)
    %:echo $+($str(ÿ,21),14- Ä15-,$str(Ä,%r),Ä00Ä15ÄÙ)
  }
}
alias -l echelon.align { return $+($str( ,$calc($1 - $len($2-))),$2-) }
alias echelon.eval {
  var %a = $str( ,$calc(15 - $len($2)))
  if (%::chan) { %:echo 14ù11í14ù11 $+($1,14,$echelon.brack($3) 11,%a,$2,14) $iif($4-,$4-,$address) %:comments }
  else { %:echo 14ù11í14ù11 $+($1,14,(query) 11,%a,$2,14) $iif($3-,$3-,$address) %:comments }
}
alias echelon.txtal {
  if ($strip($2)) var %m = $right($2,1)
  else var %m =  
  var %a = $str( ,$calc(15 - $len($3)))
  if ($1 == -t) %:echo $+(11,%m,14/15,$3,%a,14>) $4-
  else %:echo $+(11,%m,14!15,$3,%a)  $4-
}
alias -l echelon.brack { if ($1) return ( $+ $1- $+ 14) }
alias echelon { me is using [echelon] MTS theme by greeny. }