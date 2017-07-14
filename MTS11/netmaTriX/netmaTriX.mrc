alias theme.whois {
  %:echo   /whois 10 %::nick  11[start11]
  %:echo       ›  10 $+ %::nick  is " $+ %::realname $+ "   11[10 $+ %::address $+ 11]
  IF %::operline { %:echo    › 10 %::nick is an irc operator }
  var %x = 1, %c = %::chan, %n = %::nick, %i = $numtok(%c,32)
  while %i {
    var %y = $gettok(%c,%i,32), %f = $left(%y,1)
    IF %f != @ && %f != % && %f != + { var %s = %y }
    ELSE { var %s = $right(%y,-1) }
    IF @ == %f { var %o = $addtok(%o,$iif($me ison %s, $+ %s $+ ,%s),32) }
    ELSEIF % == %f { var %h = $addtok(%h,$iif($me ison %s, $+ %s $+ ,%s),32) }
    ELSEIF + == %f { var %v = $addtok(%v,$iif($me ison %s, $+ %s $+ ,%s),32) }
    ELSE { var %r = $addtok(%r,$iif($me ison %s, $+ %s $+ ,%s),32) }
    dec %i
  }
  %:echo      › common channels:10 $comchan(%::nick,0)
  IF %o { %:echo      › oped in:10 %o }
  IF %h { %:echo     › halfoped in:10 %h }
  IF %v { %:echo     › voiced in:10 %v }
  IF %r { %:echo     › regular in:10 %r }
  IF %::wserver { %:echo      › connected to:10 %::wserver  11[10 $+ %::serverinfo $+ 11]  }
  IF %::away { %:echo     › 10 %::nick  is away:10 %::away }
  IF %::idletime { %:echo     › 10 %::nick  has ben idle for:10 $duration(%::idletime) }
  IF %::signontime { %:echo     › 10 %::nick  signed on10 $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo  /whois 10 %::nick  11[end11]
}
alias theme.topic {
  %:echo
  %:echo .topic› / 10 $+ %::nick sets topic to –› 11[10 $+ %::text $+ 11]
  %:echo
}
