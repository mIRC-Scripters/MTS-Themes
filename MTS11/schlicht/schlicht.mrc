alias schlicht.whois {
  %:echo %::pre
  %:echo %::pre  $+ %::nick is $+  %::realname $+  ( $+ %::address $+ ) %::operline
  if (%::schlichtwhois.auth) { %:echo %::pre $+(1,%::nick is, ,%::c2,authed as) %::schlichtwhois.auth }
  if (%::chan) {
    var %i = $numtok(%::chan,32),%o,%h,%v,%r
    while (%i) {
      var %t = $gettok(%::chan,%i,32),%p = $left(%t,1),%l = $right(%t,-1),%g = $+($iif($me ison %l,),%l,)
      if (%p == @) { %o = $addtok(%o,%g,32) }
      elseif (%p == %) { %h = $addtok(%h,%g,32) }
      elseif (%p == +) { %v = $addtok(%v,%g,32) }
      else { %r = $addtok(%r,$+($iif($me ison %t,),%t,),32) }
      dec %i
    }
    if (%o) { %:echo %::pre $+(1,%::nick is, ,%::c2,opped in) %o }
    if (%h) { %:echo %::pre $+(1,%::nick is, ,%::c2,halfopped in) %h }
    if (%v) { %:echo %::pre $+(1,%::nick is, ,%::c2,voiced in) %v }
    if (%r) { %:echo %::pre $+(1,%::nick is, ,%::c2,reg in) %r }
  }
  if (%::wserver) %:echo %::pre $+(1,%::nick is, ,%::c2,using) %::wserver $+ , %::serverinfo
  if (%::away) %:echo %::pre $+(1,%::nick is, ,%::c2,away) %::away
  if (%::idletime) { %:echo %::pre $+(1,%::nick is, ,%::c2,idle for) $duration(%::idletime) $+ , signed on $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo %::pre
  unset %::schlichtwhois.auth
}
alias schlicht.whowas {
  %:echo %::pre
  %:echo %::pre  $+ %::nick was $+  %::realname / %::address
  if (%::wserver) %:echo %::pre $+(1,%::nick was, using) %::wserver %::serverinfo
  %:echo %::pre
}
