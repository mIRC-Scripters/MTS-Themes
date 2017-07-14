alias voks.whois {
  %:echo (/whois start)
  %:echo $+(02—› 110,%::nick, 02is "10,%::realname,02") 02( $+ %::address $+ )
  if (%thm.ownip) { %:echo —› $+(,%::nick, 02real host10) $gettok($ifmatch,1,32) 02( $+ $gettok($ifmatch,2,32) $+ ) }
  if ($q.net) && (%thm.auth) { %:echo $+(—› ,%::nick, 02is authed as "10,$ifmatch,02") }
  if (%::operline) { %:echo $+(—› ,%::nick, 02,is10) an IRC Operator }
  if (%::chan) {
    var %i = $numtok(%::chan,32),%o,%h,%v,%r
    while (%i) {
      var %t = $gettok(%::chan,%i,32),%p = $left(%t,1),%l = $right(%t,-1),%g = $+($iif($me ison %l,),%l,10)
      if (%p == @) { %o = $addtok(%o,%g,32) }
      elseif (%p == %) { %h = $addtok(%h,%g,32) }
      elseif (%p == +) { %v = $addtok(%v,%g,32) }
      else { %r = $addtok(%r,$+($iif($me ison %t,),%t,10),32) }
      dec %i
    }
    if (%o) { %:echo $+(—› ,%::nick, 02opped in10) %o }
    if (%h) { %:echo $+(—› ,%::nick, 02halfopped in10) %h }
    if (%v) { %:echo $+(—› ,%::nick, 02voiced in10) %v }
    if (%r) { %:echo $+(—› ,%::nick, 02reg in10) %r }
  }
  if (%::wserver) { %:echo —› $+(,%::nick, 02using10) %::wserver 02( $+ %::serverinfo $+ ) }
  if (%::away) { %:echo —› $+(,%::nick, 02is) away:10 %::away }
  if (%::idletime) {
    %:echo —› $+(,%::nick, 02has) been idle for10 $duration(%::idletime)
    %:echo —› $+(,%::nick, 02signed) on10 $duration($calc($ctime - $ctime(%::signontime))) ago
  }
  %:echo (/whois end)
  unset %thm.auth %thm.ownip
}
alias voks.whowas {
  %:echo (/whowas start)
  %:echo —› $+(1,%::nick, 02was "10,%::realname,02") 02( $+ %::address $+ )
  if (%::wserver) { %:echo —› $+(10,%::nick, 02using10) %::wserver }
  if (%::serverinfo) { %:echo —› $+(10,%::nick, 02quit10) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo (/whowas end)
}
alias nn.tsd { return $+(10,$chr(40),,$1-,10,$chr(41)) }
alias nn.tgt { return $+(10,$1-) }
alias nn.tgtd { return $+(10,$1-,:) }
