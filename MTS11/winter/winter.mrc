alias winter.whois {
  %:echo 02((12 /whois start 02))
  %:echo $+(02 —› 1,%::nick, 12is ",%::realname,12") 02(12 $+ %::address $+ 02)
  if (%thm.ownip) { %:echo 11 —› $+(,%::nick,) 12actual host is $gettok($ifmatch,1,32) 02(12 $+ $gettok($ifmatch,2,32) $+ 02) }
  if ($q.net) && (%thm.auth) { %:echo $+(11 —› ,%::nick, 12is authed as 12",$ifmatch,12") }
  if (%::operline) { %:echo $+(11 —› ,%::nick, 12,is) an IRC Operator }
  if (%::chan) {
    var %m,%c = $regsub(%::chan,/(^-| -)/g,$chr(32),%m),%i = $numtok(%m,32),%o,%h,%v,%r
    while (%i) {
      var %t = $gettok(%m,%i,32),%p = $left(%t,1),%l = $right(%t,-1),%g = $+($iif($me ison %l,),%l,)
      if (%p == @) { %o = $addtok(%o,%g,32) }
      elseif (%p == %) { %h = $addtok(%h,%g,32) }
      elseif (%p == +) { %v = $addtok(%v,%g,32) }
      else { %r = $addtok(%r,$+($iif($me ison %t,),%t,),32) }
      dec %i
    }
    if (%o) { %:echo 11 —› $+(,%::nick,) 12opped in %o }
    if (%h) { %:echo 11 —› $+(,%::nick,) 12halfopped in %h }
    if (%v) { %:echo 11 —› $+(,%::nick,) 12voiced in %v }
    if (%r) { %:echo 11 —› $+(,%::nick,) 12reg in %r }
  }
  if (%::wserver) { %:echo 11 —› $+(,%::nick,) 12using %::wserver 02(12 $+ %::serverinfo $+ 02) }
  if (%::away) { %:echo 11 —› $+(,%::nick,) 12is away: %::away }
  if (%::idletime) {
    %:echo 11 —› $+(,%::nick,) 12has been idle for $duration(%::idletime)
    %:echo 11 —› $+(,%::nick,) 12signed on $duration($calc($ctime - $ctime(%::signontime))) ago
  }
  %:echo 02((12 /whois end 02))
  unset %thm.auth %thm.ownip
}
alias winter.whowas {
  %:echo 02((12 /whowas start 02))
  %:echo 11 —› $+(1,%::nick, 12was ",%::realname,12") 02(12 $+ %::address $+ 02)
  if (%::wserver) { %:echo 11 —› $+(,%::nick, 12using) %::wserver }
  if (%::serverinfo) { %:echo 11 —› $+(,%::nick, 12quit) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo 02((12 /whowas end 02))
}
alias winter.text {
  if (%wintermts.aln) {
    if (%wintermts.alnlen !isnum 1-400) { set %wintermts.alnlen 100 }
    var %z,%n = $1,%v = $calc((%wintermts.alnlen - $width(%n,Tahoma,10,0,1))/3),%r = $replace($round($calc((%v - $int(%v))*3+2),0),0,!,1,!,2,!,3,.,4,|)
    %:echo $+(,$color(back).dd,%r,$str( ,$int(%v)),,%n,02:) $2-
  }
  else { %:echo 02( $+ $1 $+ 02) $2- }
}
alias winter.action {
  if (%wintermts.aln) {
    if (%wintermts.alnlen !isnum 1-400) { set %wintermts.alnlen 100 }
    var %z,%n = $1,%v = $calc((%wintermts.alnlen - $width(%n,Tahoma,10,0,1))/3),%r = $replace($round($calc((%v - $int(%v))*3+2),0),0,!,1,!,2,!,3,.,4,|)
    %:echo $+(,$color(back).dd,%r,$str( ,$int(%v)),,%n, ) $2-
  }
  else { %:echo • $1- }
}
alias wintersetup {
  if ($dialog(wintersetup)) { dialog -v $ifmatch }
  else { dialog -m wintersetup wintersetup }
}
dialog wintersetup {
  title "Winter.MTS options"
  size -1 -1 116 66
  option dbu
  box "Winter.MTS nickname alignment options",1,2 2 112 47
  radio "&Don't align nicknames",2,8 11 63 9
  radio "&Align nicknames, space:",3,8 20 68 9
  edit "",4,78 19 31 11,autohs limit 3 center
  text "Note: aligned nicknames only work with the default font, Tahoma size 10.",5,8 32 100 14,center
  button "&Cancel",7,31 52 40 12,cancel
  button "&Ok",6,74 52 40 12,ok
}
on *:dialog:wintersetup:*:*:{
  if ($devent == init) {
    if (%wintermts.alnlen) { did -a $dname 4 $ifmatch }
    else {
      did -a $dname 4 100
      set %wintermts.alnlen 100
    }
    if (%wintermts.aln) { did -c $dname 3 }
    else {
      did -c $dname 2
      did -b $dname 4
    }
  }
  elseif ($devent == sclick) {
    if ($did == 6) {
      if ($did(4) isnum 1-400) { set %wintermts.alnlen $ifmatch }
      else { set %wintermts.alnlen 100 }
      if ($did(2).state) { unset %wintermts.aln }
      else { set %wintermts.aln 1 }
    }
    elseif ($did == 3) { did -e $dname 4 }
    elseif ($did == 2) { did -b $dname 4 }
  }
}
