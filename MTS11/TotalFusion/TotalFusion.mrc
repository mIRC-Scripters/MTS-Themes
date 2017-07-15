alias TotalFusion.whois {
  %:echo 12•››››››››››››››››››››››››11››››››››››››››››››››12›››››››››››››››11››››››››››10›› ›11›››10› ››11› ›› ›10› ›1› 10› 1 ›  
  %:echo %::pre 6[8 $+ %::nick $+ 6]0 is $+ 7 %::realname $+  10|11|10|7 %::address
  if (%::TotalFusionwhois.auth) { %:echo %::pre $+(2,%::nick is, ,%::c2,0A15uthed 14as) 7"8 $+ %::TotalFusionwhois.auth $+ 7" }
  if (%::operline) { %:echo %::pre $+(2,%::nick is ,%::c2,14an 4IRC Operator }
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
    if (%o) { %:echo %::pre $+(2,%::nick is, ,%::c2,0O15pped 14in) %o }
    if (%h) { %:echo %::pre $+(2,%::nick is, ,%::c2,0H15alfopped 14in) %h }
    if (%v) { %:echo %::pre $+(2,%::nick is, ,%::c2,0V15oiced 14in) %v }
    if (%r) { %:echo %::pre $+(2,%::nick is, ,%::c2,0O15n) %r }
  }
  if (%::wserver) %:echo %::pre $+(2,%::nick is, ,%::c2,0U15sing15) %::wserver $+ 7,14 %::serverinfo
  if (%::away) %:echo %::pre 6[8 $+ %::nick $+ 6]0 is 8A6way8:9 %::away
  if (%::idletime) { %:echo %::pre $+(2,%::nick is, ,%::c2,0I15dling 14for) $duration(%::idletime) $+ , 0S15igned 14on $duration($calc($ctime - $ctime(%::signontime))) ago }
  unset %::TotalFusionwhois.auth
  %:echo 12•››››››››››››››››››››››››11››››››››››››››››››››12›››››››››››››››11››››››››››10›› ›11›››10› ››11› ›› ›10› ›1› 10› 1 ›
}

alias TotalFusion.whowas {
  %:echo %::pre
  %:echo %::pre 6[8 $+ %::nick $+ 6]0 was $+ 7  %::realname / %::address
  if (%::wserver) %:echo %::pre $+(2,%::nick is, ,%::c2,0U15sing15) %::wserver $+ 7,14 %::serverinfo
  %:echo %::pre
}

alias nn.tsd { return $+(11,$chr(40),,$1-,11,$chr(41)) }
alias nn.tgt { return $+(11,$left($1-,-1),,$right($1-,1),11) }
alias nn.tgtd { return $+(11,$left($1-,-1),,$right($1-,1),:11) }
alias nn.linesep { return 12•›››››››››››››››››11›››››››››››››12››››››››11›››10›› ›11›››10› ››11› ›› ›10› ›1› 10› 1 › }
