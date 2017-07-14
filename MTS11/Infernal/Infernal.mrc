alias infernal.whois {
  %:echo  13 ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
  %:echo  13 ³ /whois start 13³
  %:echo  13 ÀÄÂÄÄÄÄÄÄÂÄÄÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ Ä
  %:echo    13 ³ nick 13³ %::nick 13( $+ %::realname $+ 13)
  %:echo    13 ³ addy 13³ $replace(%::address,@,13@)
  if (%::chan) {
    var %i = $numtok(%::chan,32),%m = 0
    while (%i) {
      var %c = $gettok(%::chan,%i,32),%p = $left(%c,1),%f = $prefix
      if (%p isin $prefix) {
        while (%f) {
          var %y = $left(%f,1)
          if (%p == %y) {
            if ($me ison $right(%c,-1)) {
              var %u = $+(#,$right(%c,-2),)
              inc %m
            }
            else { var %u = $right(%c,-1) }
            set -nu0 %_wchan. [ $+ [ %y ] ] $addtok(%_wchan. [ $+ [ %y ] ],%u,32)
          }
          var %f = $right(%f,-1)
        }
      }
      else {
        if ($me ison %c) { inc %m }
        set -nu0 %_wchan. $addtok(%_wchan.,$iif($me ison %c,$+(#,$right(%c,-1),),%c),32)
      }
      dec %i
    }
    %:echo    13 ³ chan 13ÃÄÄÄÂÄÄÄ Ä
    var %f = $prefix
    while (%f) {
      var %v = $eval($+(%,_wchan.,$left(%f,1)),2)
      if (%v) { %:echo    13 ³      13³ $iif($left(%f,1),$ifmatch, ) 13³ $replace(%v,$chr(35),13#) }
      var %f = $right(%f,-1)
    }
    if (%_wchan.) { %:echo    13 ³      13³   13³ $replace(%_wchan.,$chr(35),13#) }
    %:echo    13 ³      13ÃÄÄÄÅÄÄÄ Ä
    %:echo    13 ³      13³ ? 13³ $numtok(%::chan,32) total13, %m common channel(s)
    %:echo    13 ³      13ÃÄÄÄÁÄÄÄ Ä
  }
  %:echo    13 ³ serv 13³ %::wserver $+(13,$chr(40),,%::serverinfo,13,$chr(41))
  if (%::away) { %:echo    13 ³ away 13³ %::away }
  if (%::idletime) {
    %:echo    13 ³ idle 13³ $duration(%::idletime)
    %:echo    13 ³ conn 13³ $duration($calc($ctime - $ctime(%::signontime))) ago $+(13,$chr(40),,%::signontime,13,$chr(41))
  }
  %:echo  13 ÚÄÁÄÄÄÄÄÄÁÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ Ä
  %:echo  13 ³ /whois end 13³
  %:echo  13 ÀÄÄÄÄÄÄÄÄÄÄÄÄÙ
  unset %thm.auth %thm.ownip
}
alias infernal.whowas {
  %:echo  13 ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
  %:echo  13 ³ /whowas start 13³
  %:echo  13 ÀÄÂÄÄÄÄÄÄÂÄÄÄÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ Ä
  %:echo    13 ³ nick 13³ %::nick $+(13,$chr(40),,%::realname,13,$chr(41))
  %:echo    13 ³ addy 13³ $replace(%::address,@,13@)
  if (%::wserver) { %:echo    13 ³ serv 13³ %::wserver }
  if (%::serverinfo) { %:echo    13 ³ quit 13³ $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo  13 ÚÄÁÄÄÄÄÄÄÁÄÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ Ä
  %:echo  13 ³ /whowas end 13³
  %:echo  13 ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
}
